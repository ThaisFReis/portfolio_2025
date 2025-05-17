import { motion } from "framer-motion";
import avatar from "@/assets/eu.png"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 py-16 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Avatar */}
      <motion.img
        src={avatar}
        alt="Avatar"
        className="w-40 h-40 md:w-56 md:h-56 rounded-2xl shadow-lg bg-lavender p-2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Texto */}
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-pinkAccent mb-4">
          Sobre mim
        </h2>
        <p className="text-textPrimary text-base md:text-lg mb-4 leading-relaxed">
          Oi! Eu sou a <span className="font-medium">Thais Ferreira</span>, desenvolvedora
          front-end e cientista de dados. Atualmente curso <span className="font-medium">Ciências Matemáticas e da Terra na UFRJ</span> e atuo com
          tecnologias como React, TypeScript, Tailwind e Python. Amo criar experiências agradáveis,
          resolver problemas com dados e participar de projetos criativos!
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "React",
            "TypeScript",
            "Tailwind",
            "Python",
            "SQL",
            "Node.js",
            "Docker",
            "Talend",
          ].map((skill, i) => (
            <span
              key={i}
              className="bg-pinkAccent/20 text-pinkAccent text-xs px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}