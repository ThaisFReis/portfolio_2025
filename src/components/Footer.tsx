import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E2F] text-center py-6 text-sm text-textPrimary border-t border-[#2A2A3C] mt-10">
      <div className="flex justify-center gap-6 mb-2 text-lg text-pinkAccent">
        <a
          href="https://github.com/ThaisFReis"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/thaisfreis"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Thais Ferreira — Feito com 💜 e café</p>
    </footer>
  );
}
