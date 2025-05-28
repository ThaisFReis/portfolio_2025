import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

export const Hero = () => {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col laptop:grid laptop:grid-cols-2 items-center justify-center w-full max-w-screen-xl gap-10 py-16 mt-20 ">
        {/* ESQUERDA */}
        <div className="relative flex flex-col justify-center group w-full rounded-2xl p-6 border border-lavender/5 shadow-md backdrop-blur-[3px] gap-4 max-w-xl mx-auto">
          {/* glowing particle background */}
          <div className="absolute inset-0 z-0 pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_10%_10%,rgba(93,120,185,0.20)_0%,transparent_20%),radial-gradient(circle_at_20%_20%,rgba(93,120,185,0.08)_0%,transparent_50%)] before:blur-lg before:opacity-80"></div>

          <p className="text-xs text-lavender font-mono tracking-widest mb-2 relative z-10">
            &lt;title&gt;
          </p>

          <h1 className="text-3xl tablet:text-4xl laptop:text-6xl font-extrabold leading-tight tracking-wide uppercase text-[#fff] relative z-10">
            OI, EU SOU
            <br />
            <span className="inline-block py-1 mt-2 rounded-md">THAIS</span>
            <br />
            <span className="inline-block py-1 mt-2 rounded-md">
              FERREIRA REIS
            </span>
          </h1>

          <p className="text-xs text-lavender font-mono tracking-widest mt-2 ml-auto mr-0 relative z-10">
            &lt;/title&gt;
          </p>

          <div className="mt-5 text-pinkAccent font-mono text-sm leading-6 relative z-10">
            // Desenvolvedora Front-end <br />
            // Cientista de dados em formação
          </div>

          <p className="mt-5 text-textPrimary text-sm leading-relaxed relative z-10">
            Crio experiências digitais modernas, acessíveis e inclusivas. <br />
            Apaixonada por desenvolvimento web, dados e tecnologia de impacto.
          </p>

          {/* Ícones sociais */}
          <div className="flex items-center gap-5 mt-6 text-[#fff] relative z-10 justify-center">
            <a href="https://github.com/ThaisFReis" target="_blank">
              <FaGithub className="text-xl hover:text-coral transition" />
            </a>
            <a href="https://linkedin.com/in/thaisfreis" target="_blank">
              <FaLinkedin className="text-xl hover:text-coral transition" />
            </a>
          </div>
        </div>

        {/* DIREITA - CARDS */}
        <div className="flex flex-col w-full items-center gap-6 max-w-xl">
          <div className="flex flex-col tablet:flex-row gap-4 w-full">
            <GlassCard
              icon={
                <HiOutlineDocumentText className="text-3xl text-pinkAccent group-hover:text-coral" />
              }
              title="Sobre mim"
              description="Formação, carreira e perfil"
              href="#about"
            />
            <GlassCard
              icon={
                <FiFileText className="text-3xl text-pinkAccent group-hover:text-coral" />
              }
              title="Projetos"
              description="Veja o que já construí"
              href="#projects"
            />
          </div>

          {/* CTA */}
          <motion.div
            className="border border-lavender/5 backdrop-blur-[3px] text-[#fff] text-center rounded-2xl p-6 font-semibold text-lg laptop:text-xl hover:scale-[1.02] transition hover:bg-coral w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#contact">Vamos trabalhar juntos!</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
