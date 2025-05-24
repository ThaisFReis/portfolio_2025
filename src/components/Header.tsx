import { PiDownloadSimpleLight } from "react-icons/pi";

export default function Header() {
  return (
    <header
      className="flex justify-between items-center p-6 fixed z-50 w-screen m shadow-md backdrop-blur-lg
    "
    >
      <h1 className="text-xl font-bold text-white uppercase ml-0 mr-auto">
        TFR
      </h1>
      <nav className="space-x-6 hidden md:flex">
        <a href="#about" className="hover:text-pinkAccent transition">
          Sobre
        </a>
        <a href="#projects" className="hover:text-pinkAccent transition">
          Projetos
        </a>
        <a href="#contact" className="hover:text-pinkAccent transition">
          Contato
        </a>
      </nav>
      <a href="/Thais-Ferreira-Reis-CV-Atualizado.pdf" download>
        <button className="bg-coral/30 text-[#fff] border border-coral/40 px-4 py-2 rounded-full font-medium hover:bg-coral transition ml-auto mr-0 flex items-center gap-2">
          <PiDownloadSimpleLight size={18} />
          Download CV
        </button>
      </a>
    </header>
  );
}
