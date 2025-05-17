import avatar from "@/assets/eu.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

export const TopSection = () => {
  return (
    <section className="px-6 pt-10 max-w-7xl mx-auto">
      {/* Saudação no topo */}
      <motion.div
        className="mb-6 rounded-2xl p-4 bg-white/5 border border-white/10 backdrop-blur-md text-white text-sm sm:text-base"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        👋 Oi! Seja bem-vindo(a) ao meu portfólio. Fique à vontade para explorar
        e conhecer meu trabalho!
      </motion.div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Bloco principal com avatar e bio */}
        <motion.div
          className="col-span-1 sm:col-span-2 md:col-span-1 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt="Avatar"
              className="w-24 h-24 rounded-2xl object-cover shadow-md"
            />
            <div>
              <p className="text-sm text-gray-400">Frontend Engineer</p>
              <h1 className="text-xl font-bold text-white">
                Thais Ferreira Reis
              </h1>
              <p className="text-xs mt-1 text-gray-400">
                Rio de Janeiro • UFRJ
              </p>
            </div>
          </div>

          <p className="text-sm mt-2 text-gray-300">
            Desenvolvedora front-end com foco em interfaces modernas e cientista
            de dados em formação. Experiência com React, Tailwind, Docker,
            Python, ETL e automações com IA.
          </p>
        </motion.div>

        {/* Cartões com informações */}
        <div className="flex items-center justify-between">
          <GlassCard
            icon={<HiOutlineDocumentText className="text-3xl text-coral" />}
            title="Sobre mim"
            description="Formação, carreira e perfil"
            href="#about"
          />

          <GlassCard
            icon={<FiFileText className="text-3xl text-coral" />}
            title="Projetos"
            description="Veja o que já construí"
            href="#projects"
          />

          <GlassCard
            icon={<MdOutlineWorkOutline className="text-3xl text-coral" />}
            title="Serviços"
            description="Web, dados, automações"
            href="#services"
          />
        </div>

        <div className="flex items-center justify-between">
          {/* Redes sociais */}
          <motion.div
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm opacity-70 mb-2">Redes sociais</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/ThaisFReis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:scale-110 transition"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/thaisfreis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:scale-110 transition"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            className="col-span-1 sm:col-span-2 md:col-span-3 bg-coral/10 border border-coral/40 backdrop-blur-md text-pinkAccent  text-center rounded-2xl p-6 font-semibold text-xl hover:scale-[1.02] transition hover:bg-coral"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#contact">
              Vamos trabalhar <span className="text-coral"> juntos!</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
