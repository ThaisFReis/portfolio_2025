import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

export const Hero = () => {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 laptop:grid-cols-2 items-center w-screen min-h-screen laptop:px-40">
        {/* ESQUERDA */}
        <div className="flex flex-col justify-center group w-fit rounded-2xl p-6 border border-lavender/5 shadow-md transition-all duration-300 backdrop-blur-[3px] gap-2">
          {/* glowing particle background */}
          <div className="absolute inset-0 z-0 pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_10%_10%,rgba(93,120,185,0.20)_0%,transparent_20%),radial-gradient(circle_at_20%_20%,rgba(93,120,185,0.08)_0%,transparent_50%)] before:blur-lg before:opacity-80"></div>
          <p className="text-xs text-lavender font-mono tracking-widest mb-2">
            &lt;title&gt;
          </p>

          <h1 className="text-4xl laptop:text-6xl font-extrabold leading-tight tracking-wide uppercase text-[#fff]">
            OI, EU SOU
            <br />
            <span className="inline-block py-1 mt-3 rounded-md">THAIS</span>
            <br />
            <span className="inline-block py-1 mt-2 rounded-md">
              FERREIRA REIS
            </span>
          </h1>

          <p className="text-xs text-lavender font-mono tracking-widest mt-2 ml-auto mr-0">
            &lt;/title&gt;
          </p>

          <div className="mt-5 text-pinkAccent font-mono text-sm leading-6">
            // Desenvolvedora Front-end <br />
            // Cientista de dados em formação
          </div>

          <p className="mt-5 text-textPrimary text-sm max-w-lg leading-relaxed ">
            Crio experiências digitais modernas, acessíveis e inclusivas. <br />
            Apaixonada por desenvolvimento web, dados e tecnologia de impacto.
          </p>

          {/* Ícones sociais */}
          <div className="flex items-center justify-center gap-5 mt-6 text-[#fff]">
            <a href="https://github.com/ThaisFReis" target="_blank">
              <FaGithub className="text-xl hover:text-coral transition" />
            </a>
            <a href="https://linkedin.com/in/thaisfreis" target="_blank">
              <FaLinkedin className="text-xl hover:text-coral transition" />
            </a>
          </div>
        </div>

        {/* DIREITA - CARDS */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <GlassCard
              icon={<HiOutlineDocumentText className="text-3xl text-pinkAccent group-hover:text-coral" />}
              title="Sobre mim"
              description="Formação, carreira e perfil"
              href="#about"
            />
            <GlassCard
              icon={<FiFileText className="text-3xl text-pinkAccent group-hover:text-coral" />}
              title="Projetos"
              description="Veja o que já construí"
              href="#projects"
            />
          </div>

          {/* CTA */}
          <motion.div
            className="border border-lavender/5 backdrop-blur-[3px] text-[#fff] text-center rounded-2xl p-6 font-semibold text-xl hover:scale-[1.02] transition hover:bg-coral"
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
