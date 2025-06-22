export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          {/* Needle Animation */}
          <div className="absolute inset-0 animate-spin">
            <div className="w-1 h-16 bg-gradient-to-b from-gray-400 to-gray-600 mx-auto rounded-full"></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full mx-auto mt-1"></div>
          </div>

          {/* Thread Lines */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            {" "}
            <div className="w-0.5 h-8 bg-orange-400 animate-pulse opacity-70"></div>
            <div className="w-0.5 h-6 bg-amber-400 animate-pulse opacity-50 ml-1 -mt-6"></div>
            <div className="w-0.5 h-4 bg-orange-500 animate-pulse opacity-60 ml-2 -mt-4"></div>
          </div>
        </div>

        {/* Lace Pattern Animation */}
        <div className="flex justify-center space-x-2 mb-6">
          {" "}
          <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Preparando nossa coleção...
        </h2>
        <p className="text-gray-600">
          Tecendo as melhores peças em renda filé para você
        </p>

        {/* Animated Lace Border */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-orange-200 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
