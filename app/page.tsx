import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const options = [
    { 
      name: "Licence", 
      href: "/licence", 
      img: "/licence.jpg",
      description: "L1, L2, L3",
      icon: "🎓"
    },
    { 
      name: "Master", 
      href: "/master", 
      img: "/master.jpg",
      description: "M1, M2",
      icon: "📚"
    },
    { 
      name: "Ingénieur", 
      href: "/ingenieur", 
      img: "/ingenieur.jpg",
      description: "1ère à 5ème année",
      icon: "⚙️"
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8 p-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
              📓 Répertoire Académique
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
          </div>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Accédez à tous vos <span className="font-semibold text-white">TD, examens et exercices</span> en un seul endroit
          </p>

          {/* Badges statistiques */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-white font-semibold">100+ Documents</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-white font-semibold">Mis à jour régulièrement</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {options.map((opt) => (
            <Link
              key={opt.name}
              href={opt.href}
              className="group relative h-80 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Image background */}
              <div className="absolute inset-0">
                <Image
                  src={opt.img}
                  alt={opt.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                {/* Icon */}
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {opt.icon}
                </div>
                
                {/* Title */}
                <h2 className="text-4xl font-bold text-white mb-2">
                  {opt.name}
                </h2>
                
                {/* Description */}
                <p className="text-white text-sm mb-4 opacity-80">
                  {opt.description}
                </p>
                
                {/* CTA Button */}
                <div className="flex items-center text-white font-semibold gap-2 group-hover:gap-3 transition-all duration-300">
                  <span>Explorer</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                {/* Animated line */}
                <div className="w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:w-25 rounded-full" />
              </div>
            </Link>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-8 text-center">
          <p className="text-blue-200 text-sm">
            {"Besoin d'aide ?"} <Link href="/contact" className="text-white underline hover:text-blue-300 transition-colors">Contactez-nous</Link>
          </p>
        </div>
      </div>
    </main>
  );
}