import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900/95 via-purple-900/95 to-indigo-900/95 backdrop-blur-md text-white shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/app-logo.svg"
              alt="Logo"
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            Tresor <span className="text-blue-300">USTO</span>
          </span>
        </Link>

        <ul className="flex items-center gap-8 font-semibold text-base">
          <li>
            <Link href="/" className="relative group py-2 inline-block">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-300">
                Home
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          </li>
          <li>
            <Link href="/about" className="relative group py-2 inline-block whitespace-nowrap">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-300">
                À propos
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          </li>
          <li>
            <Link href="/contact" className="relative group py-2 inline-block">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-300">
                Contact
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}