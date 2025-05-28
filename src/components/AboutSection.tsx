import { useState } from "react";
import { motion } from "framer-motion";
import {
  PiGraduationCapLight,
  PiSuitcaseLight,
  PiCodeLight,
  PiRocketLaunchLight,
} from "react-icons/pi";
import { GlassCard } from "./GlassCard";

type TimelineItem = {
  year: string;
  title: string;
  place?: string;
  description: string;
};

const education: TimelineItem[] = [
  {
    year: "2019 - atualmente",
    title: "Ciências Matemáticas e da Terra",
    place: "Universidade Federal do Rio de Janeiro (UFRJ)",
    description:
      "Matérias relevantes: Cálculo, Segurança da Informação, Computação.",
  },
  {
    year: "2022 - 2023",
    title: "Desenvolvimento Web Full Stack",
    place: "Driven Education",
    description: `Projetos: +20 aplicações Full Stack.
    • Metodologias ágeis (Scrum, sprints semanais).`,
  },
];

const experience: TimelineItem[] = [
  {
    year: "2023 - atualmente",
    title: "Iniciação Científica em ETL",
    place: "CAPGov",
    description: `Construção de pipelines de dados com SQL, Talend, Java e Python.
    • Automação de processos de dados.
    • Uso de Docker para padronizar ambientes.`,
  },
  {
    year: "2023 - 2025",
    title: "Estágio Front-End",
    place: "Beplauze",
    description: `Interfaces com React, TypeScript e Tailwind CSS.
    • Otimização com Vite e Astro.
    • Entregas semanais com metodologia ágil.`,
  },
];

const extras: TimelineItem[] = [
  {
    year: "2023",
    title: "Hackathon LiveMode - 2º lugar",
    place: "CazéTV",
    description: `Agente de IA para conteúdos esportivos.
    • Front-End com Vite, React, Tailwind.
    • Integrações com n8n e IA.`,
  },
];

const skills = [
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
      "CSS",
      "Tailwind",
      "Material UI",
    ],
  },
  {
    title: "Back-End",
    description: [
      "NodeJs",
      "Express",
      "NestJS",
      "Prisma",
      "Jest",
    ],
  },
  {
    title: "Banco de Dados",
    description: [
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
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

const icons = {
  skills: <PiCodeLight size={36} />,
  education: <PiGraduationCapLight size={36} />,
  experience: <PiSuitcaseLight size={36} />,
  extras: <PiRocketLaunchLight size={36} />,
};

type SectionKey = "skills" | "education" | "experience" | "extras";

export default function AboutSection() {
  const [selected, setSelected] = useState<SectionKey>("skills");
  const timelineMap = { education, experience, extras };
  const timeline = timelineMap[selected as keyof typeof timelineMap];

  return (
    <section
      id="about"
      className="relative py-28 px-4 sm:px-6 w-screen min-h-screen text-white bg-transparent overflow-hidden flex items-center justify-center"
    >
      <div className="relative z-10 w-full max-w-7xl grid laptop:grid-cols-3 max-tablet:flex-col gap-12 items-center justify-center">
        {/* Seletor lateral */}
        <div className="space-y-6 text-center w-full max-laptop:mx-6">
          <motion.h2
            className="text-2xl laptop:text-4xl font-extrabold leading-tight tracking-wide font-bebas uppercase text-[#fff]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SOBRE MIM
          </motion.h2>

          <p className="text-sm leading-relaxed text-gray-300 laptop:text-justify max-laptop:w-11/12 mx-auto">
            Olá! Eu sou a <span className="text-white font-medium">Thais</span>,
            uma{" "}
            <span className="italic text-white">desenvolvedora front-end</span>{" "}
            e <span className="italic text-white">analista de dados</span>{" "}
            apaixonada por criar experiências digitais modernas e funcionais.
          </p>

          <div className="flex flex-wrap justify-center laptop:justify-start gap-3">
            {(
              ["skills", "education", "experience", "extras"] as SectionKey[]
            ).map((key) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`p-3 rounded-full border-2 transition-all flex items-center justify-center ${
                  selected === key
                    ? "bg-pinkAccent/40 border-pinkAccent text-white"
                    : "border-lavender/20 text-lavender hover:bg-lavender/10"
                }`}
                aria-label={key}
              >
                {icons[key]}
              </button>
            ))}
          </div>
        </div>

        {/* Conteúdo dinâmico */}
        <div className="col-span-2 w-full max-w-full overflow-y-auto max-h-[70vh] pr-2 p-6">
          {selected !== "skills" ? (
            <ol className="relative border-s border-pinkAccent/20 pl-6 laptop:pl-10 z-20">
              {timeline.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="mb-10 ms-4"
                >
                  <span className="absolute w-3 h-3 bg-coral/80 rounded-full mt-1.5 -start-1.5 border border-coral shadow shadow-coral/40 z-50" />
                  <time className="mb-1 text-xs font-bold leading-none text-pinkAccent">
                    {item.year}
                  </time>
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  {item.place && (
                    <p className="text-sm italic text-pinkAccent mb-1">
                      {item.place}
                    </p>
                  )}
                  {item.description.includes("•") ? (
                    <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                      {item.description.split("•").map((line, idx) => (
                        <li key={idx} className="marker:text-pinkAccent">
                          {line.trim()}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-300">{item.description}</p>
                  )}
                </motion.li>
              ))}
            </ol>
          ) : (
            <div className="flex-col max-laptop:space-y-4 laptop:grid laptop:grid-cols-2 gap-4 justify-center items-center mx-auto">
              {skills.map((item, index) => (
                <GlassCard
                  key={index}
                  title={item.title}
                  classNameTitle="text-lg -mt-2"
                  description={
                    <>
                      {item.description.map((desc, i) => (
                        <span key={i} className="text-sm">
                          {desc}
                          {i < item.description.length - 1 && (
                            <span className="text-coral text-xs"> • </span>
                          )}
                        </span>
                      ))}
                    </>
                  }
                  className="!shadow-md p-4 backdrop-blur-sm bg-white/5 border border-white/10 !w-full !h-36 min-h-fit"
                  hiddenFooter
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
