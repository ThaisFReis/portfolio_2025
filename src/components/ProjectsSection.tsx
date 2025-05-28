"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import { GlassCard } from "./GlassCard";
import criaImg from "@/assets/cria2.png";
import sdaImg from "@/assets/sombras-de-aurora.png";
import trackImg from "@/assets/trackIt.png";
import { FaChevronRight } from "react-icons/fa";

const cards = [
  {
    title: "Sombras de Aurora",
    description:
      "Este projeto é uma narrativa interativa onde o usuário pode acompanhar e interagir com diferentes postagens e destaques criados por personagens, com base no desenvolvimento de um enredo dinâmico. Os personagens principais e suas postagens são influenciados pelos atos da história, permitindo uma experiência imersiva e envolvente.",
    link: "https://github.com/ThaisFReis/Sombras-de-Aurora",
    image: sdaImg,
  },
  {
    title: "CRI.A.",
    description:
      "Cria2 é uma plataforma de gerenciamento de projetos e tarefas, desenvolvida com o objetivo de facilitar a organização e o acompanhamento do progresso de atividades. Com uma interface intuitiva e recursos avançados, o Cria2 permite que os usuários criem, atribuam e monitorem tarefas de forma eficiente. Cria2 é uma plataforma de gerenciamento de projetos e tarefas, desenvolvida com o objetivo de facilitar a organização e o acompanhamento do progresso de atividades. Com uma interface intuitiva e recursos avançados, o Cria2 permite que os usuários criem, atribuam e monitorem tarefas de forma eficiente.",
    link: "https://cri-a-alpha.vercel.app/",
    image: criaImg,
  },
  {
    title: "TrackerIt",
    description:
      "TrackerIt é uma aplicação web desenvolvida para ajudar os usuários a rastrear e gerenciar suas atividades diárias. Com uma interface intuitiva e recursos avançados, o TrackerIt permite que os usuários registrem suas atividades, definam metas e acompanhem seu progresso ao longo do tempo.",
    link: "https://track-it-olive.vercel.app/",
    image: trackImg,
  },
    {
    title: "TrackerIt",
    description:
      "TrackerIt é uma aplicação web desenvolvida para ajudar os usuários a rastrear e gerenciar suas atividades diárias. Com uma interface intuitiva e recursos avançados, o TrackerIt permite que os usuários registrem suas atividades, definam metas e acompanhem seu progresso ao longo do tempo.",
    link: "https://track-it-olive.vercel.app/",
    image: trackImg,
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
          <svg className="w-10 h-10 sm:w-14 sm:h-14 -rotate-90 z-20" viewBox="0 0 100 100">
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
                <GlassCard
                  title={card.title}
                  description={card.description}
                  href={card.link}
                  image={card.image}
                  className="group relative w-full h-full !max-h-[25rem]"
                  classNameTitle="group-hover:text-coral"
                  classNameDescription="line-clamp-5"
                />
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