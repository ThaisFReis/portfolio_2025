"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { GlassCard } from "./GlassCard";
import criaImg from "@/assets/cria2.png";
import sdaImg from "@/assets/sombras-de-aurora.png";
import { FaChevronRight } from "react-icons/fa";
import { Lightbulb } from "lucide-react";

type CardsProps = {
  title: string;
  description: string;
  link?: string;
  image?: string;
  isReal: boolean;
};

const cards: CardsProps[] = [
  {
    title: "Sombras de Aurora",
    description:
      "Jogo em desenvolvimento que combina rede social simulada e enredo dinâmico, onde suas escolhas moldam a história.",
    link: "https://github.com/ThaisFReis/Sombras-de-Aurora",
    image: sdaImg,
    isReal: true,
  },
  {
    title: "CRI.A.",
    description:
      "Aplicação desenvolvida no Hackathon Livemode para organizar tarefas e acompanhar projetos de forma intuitiva e eficiente.",
    link: "https://cri-a-alpha.vercel.app/",
    image: criaImg,
    isReal: true,
  },
  {
    title: "Novos Projetos a Caminho",
    description:
      "Novas ideias estão fervendo e grandes inovações estão sendo preparadas! Em breve, você poderá explorar projetos inéditos, cheios de criatividade e tecnologia de ponta. Prepare-se para se surpreender!",
    link: "",
    isReal: false,
  },
];

export const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="relative px-4 sm:px-6 pt-32 pb-20 min-h-screen flex flex-col items-center w-screen justify-evenly"
    >
      <div className="flex flex-col items-center gap-10 w-full">
        {/* Título + círculo de progresso */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 w-full">
          <p className="text-3xl sm:text-5xl font-extrabold tracking-wide font-bebas uppercase text-white">
            Projetos
          </p>
          <svg
            className="w-10 h-10 sm:w-14 sm:h-14 -rotate-90 z-20"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-gray-700 fill-none"
              strokeWidth="10"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-coral fill-none"
              strokeWidth="10"
              style={{ pathLength: scrollXProgress }}
            />
          </svg>
        </div>

        {/* Carrossel + navegação */}
        <div className="flex items-center gap-4 w-full justify-center relative">
          {/* Botão anterior */}
          <button
            onClick={scrollLeft}
            className="hidden sm:flex z-20 bg-coral/30 hover:bg-coral text-white p-3 rounded-full transition w-10 h-10 items-center justify-center"
            aria-label="Scroll left"
          >
            <FaChevronRight className="text-xl rotate-180" />
          </button>

          {/* Carrossel */}
          <motion.div
            ref={scrollRef}
            className="w-full max-w-7xl overflow-x-auto scroll-smooth flex gap-6 laptop:gap-8 px-1 py-2 overflow-y-hidden"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[80vw] laptop:w-[22rem] transition-all duration-300"
              >
                {card.isReal ? (
                  <GlassCard
                    title={card.title}
                    description={card.description}
                    href={card.link}
                    image={card.image}
                    className="group relative w-full h-full !max-h-[25rem]"
                    classNameTitle="group-hover:text-coral"
                    classNameDescription="line-clamp-5"
                  />
                ) : (
                  <motion.div
                    className=" group bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 p-6 flex flex-col items-center text-white group-hover:scale-105 cursor-default select-none w-full max-w-sm rounded-2xl h-full !max-h-[25rem]  border border-lavender/10 shadow-md hover:shadow-lavender/20 transition-all duration-300 !backdrop-blur-[3px]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Lightbulb className="w-20 h-20 mb-4 rounded-full bg-white/25 flex items-center justify-center text-pinkAccent text-5xl group-hover:text-coral" />

                    <h3 className="text-2xl font-extrabold mb-2 text-center tracking-wide text-[#fff]">
                      {card.title}
                    </h3>
                    <p className="text-center text-sm leading-relaxed px-2">
                      {card.description}
                    </p>
                    <span className="mt-5 inline-block px-5 py-1 rounded-full bg-white/30 text-sm font-semibold uppercase tracking-wide group-hover:text-coral">
                      Em breve!
                    </span>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Botão próximo */}
          <button
            onClick={scrollRight}
            className="hidden sm:flex z-20 bg-coral/30 hover:bg-coral text-white p-3 rounded-full transition w-10 h-10 items-center justify-center"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Estilo do Scroll */}
      <style>{`
        #projects .overflow-x-auto::-webkit-scrollbar {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.5rem;
        }
        #projects .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 107, 107, 0.6);
          border-radius: 0.5rem;
        }
      `}</style>
    </section>
  );
};
