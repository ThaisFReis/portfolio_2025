import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { BsBriefcase, BsCodeSlash } from "react-icons/bs";
import { PiGraduationCapLight } from "react-icons/pi";

type stackType = {
  title: string;
  description: string[];
};

const stack: stackType[] = [
  {
    title: "Linguagens",
    description: ["JavaScript", "Python", "Java", "SQL", "TypeScript"],
  },
  {
    title: "Front-End",
    description: [
      "React",
      "Astro",
      "Vite",
      "NextJs",
      "Jest",
      "CSS",
      "Tailwind",
      "SASS",
      "Material UI",
    ],
  },
  {
    title: "Back-End",
    description: [
      "NodeJs",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "NestJS",
      "Prisma",
    ],
  },
  {
    title: "Ferramentas",
    description: [
      "Docker",
      "N8N",
      "Talend Studio",
      "Git/GitHub",
      "Firebase",
      "Figma",
    ],
  },
];

const educationTimeline = [
  {
    year: "2021",
    title: "Graduação em Ciência da Computação",
    description: "Universidade Federal do Rio de Janeiro (UFRJ).",
  },
  {
    year: "2023",
    title: "Curso de Análise de Dados",
    description: "Domínio de ETL, Python, Talend e automações com IA.",
  },
];

const experienceTimeline = [
  {
    year: "2022",
    title: "Estágio como Desenvolvedora Front-End",
    description: "Desenvolvimento de interfaces modernas com React e Tailwind.",
  },
  {
    year: "2023",
    title: "Projeto Destaque: CRI.A",
    description: "Plataforma com foco em acessibilidade e impacto social.",
  },
  {
    year: "2024",
    title: "Hackathon & Projetos",
    description: "Participação em hackathon e construção de MVPs com IA.",
  },
];

type SectionKey = "education" | "experience" | "skills";

export default function AboutSection() {
  const [selectedSection, setSelectedSection] =
    useState<SectionKey>("education");

  // Função para renderizar timeline (educação ou experiência)
  function renderTimeline(timeline: typeof educationTimeline) {
    return (
      <section className="relative w-full px-4 pt-20 pb-10">
        {/* Linha vertical central */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-coral/60 z-0" />

        <div className="space-y-4 relative z-10">
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col w-full items-center laptop:items-${
                  isLeft ? "start" : "end"
                }`}
              >
                <div className="relative w-60">
                  {/* Bolinha marcador */}
                  <div
                    className={`absolute top-4  ${
                      isLeft ? "-left-6" : "-right-6"
                    } w-4 h-4 bg-coral rounded-full border-2 border-white/10 z-10`}
                  />

                  {/* Caixa de conteúdo */}
                  <div className="border border-lavender/10 shadow-md hover:shadow-lavender/20 !backdrop-blur-[3px] p-6 rounded-2xl">
                    <h3 className="text-coral font-bold text-xs mb-1">
                      {item.year}
                    </h3>
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  // Render para skills (stack)
  function renderSkills() {
    return (
      <div className="grid laptop:grid-cols-2 gap-6 max-w-4xl w-full px-4">
        {stack.map((item, index) => (
          <GlassCard
            key={index}
            title={item.title}
            description={
              <>
                {item.description.map((desc, i) => (
                  <span key={i}>
                    {desc}
                    {i < item.description.length - 1 && (
                      <span className="text-coral"> • </span>
                    )}
                  </span>
                ))}
              </>
            }
            className="!shadow-none transition-none duration-0 !w-full !min-h-fit p-4"
            hiddenFooter={true}
          />
        ))}
      </div>
    );
  }

  return (
    <section
      id="about"
      className="py-32 px-6 bg-transparent text-white w-full flex flex-col items-center gap-12"
    >
      {/* Título e descrição */}
      <div className="max-w-3xl text-center">
        <motion.h2
          className="text-4xl laptop:text-5xl font-bold font-bebas uppercase mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mim
        </motion.h2>
        <p className="font-light ml-auto mr-0">
          Olá! Eu sou a Thais. Eu sou uma{" "}
          <span className="text-[#fff] italic font-normal">
            desenvolvedora front-end e analista de dados
          </span>
          . <br /> Com mais de{" "}
          <span className="text-[#fff] italic font-normal">2 anos</span> de
          experiência
        </p>
      </div>

      <div className="grid grid-cols-2 w-screen">
        {/* Ícones para selecionar seção */}
        <nav className="flex flex-row laptop:flex-col items-center gap-8 text-sm font-sourceSans">
          {[
            {
              key: "education",
              icon: (
                <PiGraduationCapLight className="text-4xl laptop:text-5xl" />
              ),
              label: "Educação",
            },
            {
              key: "experience",
              icon: <BsBriefcase className="text-4xl laptop:text-5xl" />,
              label: "Experiência",
            },
            {
              key: "skills",
              icon: <LiaLaptopCodeSolid className="text-4xl laptop:text-5xl" />,
              label: "Skills",
            },
          ].map(({ key, icon, label }) => (
            <button
              key={key}
              onClick={() => setSelectedSection(key)}
              className={`flex items-center relative group transition-colors duration-300 ${
                selectedSection === key ? "text-coral" : "text-white"
              }`}
            >
              {icon}

              {/* Texto com animação que aparece à direita do ícone */}
              <span
                className={`
          absolute left-full ml-2 whitespace-nowrap font-semibold text-base transition-all duration-300
          ${
            selectedSection === key
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2 pointer-events-none"
          }
        `}
              >
                {label}
              </span>
            </button>
          ))}
        </nav>

        {/* Conteúdo da seção selecionada */}
        <div className="w-full flex justify-center">
          {selectedSection === "education" && renderTimeline(educationTimeline)}
          {selectedSection === "experience" &&
            renderTimeline(experienceTimeline)}
          {selectedSection === "skills" && renderSkills()}
        </div>
      </div>
    </section>
  );
}
