"use client";

import { useCallback, useEffect, useState } from "react";

export default function FloatingButtons() {
  const [showMessage, setShowMessage] = useState(false);
  const [messageWasClosed, setMessageWasClosed] = useState(false);

  const whatsappNumber = "5588988476263";
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre as peças de renda filé artesanal 😊";
  const instagramProfile = "rendafileluxo";

  // Som de notificação usando múltiplas estratégias
  const playNotificationSound = useCallback(() => {
    console.log("Tentando tocar som..."); // Debug

    // Estratégia 1: Tentar Web Audio API
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioContextClass) {
        const audioContext = new AudioContextClass();

        // Verificar se precisa ser resumido
        if (audioContext.state === "suspended") {
          audioContext.resume().then(() => {
            console.log("AudioContext resumido"); // Debug
            playTones(audioContext);
          });
        } else {
          playTones(audioContext);
        }

        function playTones(ctx: AudioContext) {
          // Primeira nota
          const osc1 = ctx.createOscillator();
          const gain1 = ctx.createGain();
          osc1.connect(gain1);
          gain1.connect(ctx.destination);
          osc1.frequency.value = 800;
          osc1.type = "sine";
          gain1.gain.setValueAtTime(0, ctx.currentTime);
          gain1.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.01);
          gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
          osc1.start(ctx.currentTime);
          osc1.stop(ctx.currentTime + 0.15);

          // Segunda nota
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.connect(gain2);
          gain2.connect(ctx.destination);
          osc2.frequency.value = 600;
          osc2.type = "sine";
          gain2.gain.setValueAtTime(0, ctx.currentTime + 0.1);
          gain2.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.11);
          gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
          osc2.start(ctx.currentTime + 0.1);
          osc2.stop(ctx.currentTime + 0.25);

          console.log("Som tocado com Web Audio API"); // Debug
        }

        return;
      }
    } catch (error) {
      console.log("Web Audio API falhou:", error);
    }

    // Estratégia 2: Tentar criar um beep simples
    try {
      const WebAudioContext =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (WebAudioContext) {
        const audioCtx = new WebAudioContext();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.frequency.value = 800;
        oscillator.type = "sine";
        gainNode.gain.value = 0.1;

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.2);

        console.log("Som tocado com beep simples"); // Debug
        return;
      }
    } catch (error) {
      console.log("Beep simples falhou:", error);
    }

    // Estratégia 3: Fallback visual (vibração no mobile)
    try {
      if ("vibrate" in navigator) {
        navigator.vibrate([100, 50, 100]);
        console.log("Vibração ativada"); // Debug
      }
    } catch (error) {
      console.log("Vibração falhou:", error);
    }

    console.log("Nenhuma estratégia de áudio funcionou"); // Debug
  }, []);

  // Preparar áudio na primeira interação (para compatibilidade)
  useEffect(() => {
    let audioContext: AudioContext | null = null;

    const initAudio = () => {
      try {
        const AudioContextClass =
          window.AudioContext ||
          (
            window as typeof window & {
              webkitAudioContext: typeof AudioContext;
            }
          ).webkitAudioContext;
        if (AudioContextClass && !audioContext) {
          audioContext = new AudioContextClass();
          console.log("AudioContext inicializado"); // Debug
        }
      } catch (error) {
        console.log("Falha ao inicializar AudioContext:", error);
      }
    };

    // Tentar inicializar imediatamente
    initAudio();

    // Também tentar na primeira interação
    const handleFirstInteraction = () => {
      initAudio();
      if (audioContext && audioContext.state === "suspended") {
        audioContext.resume();
        console.log("AudioContext resumido na primeira interação"); // Debug
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("touchstart", handleFirstInteraction, {
      once: true,
    });
    document.addEventListener("keydown", handleFirstInteraction, {
      once: true,
    });

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  // Animação sequencial - mostrar mensagem apenas se não foi fechada
  useEffect(() => {
    if (!messageWasClosed) {
      const showMessageTimer = setTimeout(() => {
        console.log("Mostrando mensagem..."); // Debug
        setShowMessage(true);

        // Tocar som IMEDIATAMENTE quando a mensagem aparecer
        setTimeout(() => {
          console.log("Tentando tocar som após mensagem aparecer..."); // Debug
          playNotificationSound();
        }, 50); // Delay muito pequeno apenas para garantir que a mensagem já apareceu
      }, 4000); // 4 segundos após carregar a página

      return () => clearTimeout(showMessageTimer);
    }
  }, [messageWasClosed, playNotificationSound]);

  // Auto-esconder mensagem após 12 segundos
  useEffect(() => {
    if (showMessage && !messageWasClosed) {
      const autoHideTimer = setTimeout(() => {
        hideMessage();
      }, 12000);

      return () => clearTimeout(autoHideTimer);
    }
  }, [showMessage, messageWasClosed]);

  // Esconder mensagem e marcar como fechada
  const hideMessage = () => {
    setShowMessage(false);
    setMessageWasClosed(true); // Não mostrar mais
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Mensagem chamativa - posicionada ao lado */}
      {showMessage && (
        <div className="absolute bottom-0 right-20 md:right-24 animate-pulse">
          <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 text-white px-4 py-3 rounded-2xl shadow-2xl max-w-[280px] relative transform transition-all duration-500 hover:scale-105 border border-white/30">
            <button
              onClick={hideMessage}
              className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white rounded-full text-sm hover:bg-red-600 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl font-bold"
              aria-label="Fechar mensagem"
            >
              ×
            </button>
            <div className="pr-4">
              <p className="text-sm font-bold leading-tight mb-2 flex items-center">
                <span className="text-lg mr-2 animate-bounce">💬</span>
                Olá! Quer saber mais sobre nossas peças?
              </p>
              <p className="text-xs opacity-95 font-medium">
                Clique nos botões ao lado e fale conosco! ✨
              </p>
            </div>
            {/* Seta apontando para os botões - melhorada */}
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-amber-400 to-red-400 rotate-45 shadow-lg"></div>
            {/* Efeito de brilho */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-50"></div>
          </div>
        </div>
      )}

      <div className="flex flex-col space-y-3">
        {/* Botão WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
          aria-label="Falar no WhatsApp"
          onClick={hideMessage}
        >
          <svg
            className="w-7 h-7 md:w-8 md:h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>

          {/* Tooltip */}
          <div className="absolute right-16 md:right-20 bg-gray-800 text-white px-3 py-2 rounded-lg text-xs md:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Falar no WhatsApp
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>
        </a>

        {/* Botão Instagram */}
        <a
          href={`https://instagram.com/${instagramProfile}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
          aria-label="Seguir no Instagram"
          onClick={hideMessage}
        >
          <svg
            className="w-7 h-7 md:w-8 md:h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>

          {/* Tooltip */}
          <div className="absolute right-16 md:right-20 bg-gray-800 text-white px-3 py-2 rounded-lg text-xs md:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Seguir no Instagram
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>
        </a>
      </div>
    </div>
  );
}
