"use client";

import { useState } from "react";

const faqs = [
  {
    question: "O que é renda filé artesanal?",
    answer:
      "A renda filé é uma técnica artesanal tradicional brasileira que consiste em bordar sobre uma tela de lacê (rede quadriculada), criando desenhos únicos e delicados. É uma arte ancestral passada de geração em geração, especialmente no Nordeste do Brasil.",
  },
  {
    question: "Qual a diferença da renda filé para outras rendas?",
    answer:
      "A renda filé se diferencia por ser bordada sobre uma base de tela (lacê), criando um efeito de transparência único. É mais resistente que outras rendas, permite desenhos mais elaborados e geométricos, e tem uma durabilidade superior.",
  },
  {
    question: "Como são feitas as peças de renda filé?",
    answer:
      "Todas as nossas peças são feitas 100% à mão por artesãs especializadas. O processo inclui: criação da tela base de lacê, bordado dos motivos decorativos com fio de algodão, e acabamento final. Cada peça leva de 15 a 45 dias para ficar pronta.",
  },
  {
    question: "As peças são feitas sob medida?",
    answer:
      "Sim! Trabalhamos principalmente com encomendas sob medida para garantir o caimento perfeito. Entre em contato conosco pelo WhatsApp +55 88 8847-6263 para discutir suas medidas, preferências de cores e modelos.",
  },
  {
    question: "Como cuidar das peças de renda filé?",
    answer:
      "Para preservar sua renda filé: Lave à mão com sabão neutro em água fria, não torça (apenas aperte levemente), seque à sombra em superfície plana, passe com ferro morno se necessário, guarde em local arejado.",
  },
  {
    question: "Fazem entrega para todo o Brasil?",
    answer:
      "Sim! Realizamos entregas para todo o território nacional via Correios (PAC/SEDEX). O frete é calculado conforme CEP de destino e peso. Embalamos com muito cuidado para garantir que sua peça chegue perfeita.",
  },
  {
    question: "Posso personalizar cores e desenhos?",
    answer:
      "Claro! Podemos adaptar cores, tamanhos e até criar novos desenhos conforme sua preferência. Trabalhamos com fio de algodão em várias cores: branco, cru, bege, preto, coloridos. Envie suas ideias pelo WhatsApp!",
  },
  {
    question: "A renda filé é resistente para uso no dia a dia?",
    answer:
      "Sim! A renda filé é muito mais resistente que rendas convencionais devido à sua base de lacê. É perfeita para uso cotidiano, festas, casamentos, praia. Com cuidados adequados, dura muitos anos mantendo a beleza.",
  },
  {
    question: "Vocês fazem peças para casamento?",
    answer:
      "Sim! Fazemos lindas peças para noivas e madrinhas: vestidos de noiva em renda filé, saias para cerimônia, blusas para festa. É tradição usar renda filé em casamentos nordestinos. Agende com antecedência!",
  },
  {
    question: "Como faço um pedido?",
    answer:
      "É muito fácil! Entre em contato pelo WhatsApp +55 88 8847-6263, escolha o modelo no nosso catálogo, informe suas medidas, escolha cor e detalhes. Pagamento via Pix com 50% antecipado e 50% na entrega.",
  },
  {
    question: "A renda filé é uma tradição de qual região?",
    answer:
      "A renda filé é uma tradição secular do Nordeste brasileiro, especialmente do Ceará. É considerada patrimônio cultural imaterial, representando a habilidade e criatividade das artesãs nordestinas. Cada região tem suas particularidades nos desenhos.",
  },
  {
    question: "Posso visitar o ateliê?",
    answer:
      "Trabalhamos com atendimento personalizado via WhatsApp para maior comodidade. Você pode ver nosso catálogo completo online, tirar dúvidas, e acompanhar o processo de confecção da sua peça através de fotos.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes sobre Renda Filé Artesanal
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tire todas suas dúvidas sobre nossa renda filé artesanal
            tradicional. Conheça mais sobre esta arte milenar do Nordeste
            brasileiro e como adquirir suas peças únicas feitas à mão.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-5 text-left font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg pr-4">{faq.question}</span>
                  <span className="text-2xl text-amber-600 font-bold min-w-[24px]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-5 animate-in slide-in-from-top-2 duration-200"
                >
                  <p className="text-gray-700 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco pelo WhatsApp! Nossa equipe está pronta
              para esclarecer suas dúvidas e ajudar você a escolher a peça
              perfeita.
            </p>
            <a
              href="https://wa.me/5588988476263?text=Olá! Gostaria de saber mais sobre as peças de renda filé artesanal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Schema.org markup para FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
