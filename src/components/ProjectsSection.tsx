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
      "Cria2 é uma plataforma de gerenciamento de projetos e tarefas, desenvolvida com o objetivo de facilitar a organização e o acompanhamento do progresso de atividades. Com uma interface intuitiva e recursos avançados, o Cria2 permite que os usuários criem, atribuam e monitorem tarefas de forma eficiente.",
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
];

export const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="relative px-6 pt-36 pb-20 min-h-screen flex flex-col items-center w-screen justify-evenly"
    >
      <div className="flex flex-col items-center justify-between gap-10 h-fit">
        <div className="flex h-fit w-full items-center justify-center gap-6">
          <p className="text-4xl laptop:text-5xl font-extrabold leading-tight tracking-wide font-bebas uppercase text-[#fff]">
            Projetos
          </p>
          {/* Progress SVG */}
          <svg className="w-14 h-14 -rotate-90 z-20" viewBox="0 0 100 100">
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

        <div className="flex items-center gap-4">
          {/* Setinha de navegação */}
          <button
            onClick={() =>
              scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" })
            }
            className="z-20 bg-coral/30 hover:bg-coral text-white p-3 rounded-full transition w-10 h-10 flex items-center justify-center"
            aria-label="Scroll left"
          >
            <FaChevronRight className="text-xl rotate-180" />
          </button>

          {/* Carrossel Scrollable */}
          <motion.div
            ref={scrollRef}
            className="w-full max-w-7xl h-fit overflow-x-auto scroll-smooth flex gap-8 p-2 overflow-y-hidden"
          >
            {cards.map((card, i) => (
              <div key={i} className="flex-shrink-0 w-[25rem]">
                <GlassCard
                  title={card.title}
                  description={card.description}
                  href={card.link}
                  image={card.image}
                  className="h-[25rem]"
                  classNameTitle="group-hover:text-coral"
                />
              </div>
            ))}
          </motion.div>

          {/* Setinha de navegação */}
          <button
            onClick={scrollRight}
            className="z-20 bg-coral/30 hover:bg-coral text-white p-3 rounded-full transition w-10 h-10 flex items-center justify-center"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Custom Scrollbar */}
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
