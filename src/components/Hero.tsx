import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

export const Hero = () => {
  return (
    <section className="w-screen min-h-screen text-white px-6 py-20 flex items-center justify-center">
      <div className="grid grid-cols-1 laptop:grid-cols-2 items-center">
        {/* ESQUERDA */}
        <div className="flex flex-col justify-center group w-fit rounded-2xl p-6 text-white border border-lavender/5 bg-white/5 shadow-md transition-all duration-300 backdrop-blur-[3px] gap-2">
              {/* glowing particle background */}
      <div className="absolute inset-0 z-0 pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_20%,rgba(93,120,185,0.20)_0%,transparent_80%),radial-gradient(circle_at_20%_20%,rgba(93,120,185,0.08)_0%,transparent_50%)] before:blur-lg before:opacity-80"></div>
          <p className="text-xs text-lavender font-mono tracking-widest mb-2">
            &lt;title&gt;
          </p>

          <h1 className="text-4xl laptop:text-6xl font-extrabold leading-tight tracking-wide font-bebas uppercase text-textPrimary">
            OI, EU SOU
            <br />
            <span className="inline-block bg-[#4666F4] text-white px-5 py-1 mt-3 rounded-md">
              THAIS
            </span>
            <br />
            <span className="inline-block bg-coral text-white px-5 py-1 mt-2 rounded-md">
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

          <p className="mt-5 text-textPrimary text-sm max-w-lg leading-relaxed">
            Crio experiências digitais modernas, acessíveis e inclusivas. <br />
            Apaixonada por desenvolvimento web, dados e tecnologia de impacto.
          </p>

          {/* Ícones sociais */}
          <div className="flex gap-5 mt-6 text-white/70">
            <a href="https://github.com/ThaisFReis" target="_blank">
              <FaGithub className="text-xl hover:text-white transition" />
            </a>
            <a href="https://linkedin.com/in/thaisfreis" target="_blank">
              <FaLinkedin className="text-xl hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* DIREITA - CARDS */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-8">
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

          {/* CTA */}
          <motion.div
            className="bg-coral/10 border border-coral/40 backdrop-blur-md text-coral text-center rounded-2xl p-6 font-semibold text-xl hover:scale-[1.02] transition hover:bg-coral hover:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#contact">
              Vamos <span className="text-white">trabalhar juntos!</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
