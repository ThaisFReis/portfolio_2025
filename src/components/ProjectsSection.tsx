import { motion } from "framer-motion";

const projects = [
  {
    title: "Gerador de Conteúdo com IA",
    description: "Aplicação que gera resumos esportivos automaticamente com IA, usando n8n, Vite e Tailwind.",
    image: "/projects/ia-generator.png", // substitua com seu path
    tech: ["React", "Tailwind", "n8n"],
    link: "https://github.com/ThaisFReis/projeto-ia",
  },
  {
    title: "Pipeline ETL com Talend",
    description: "Pipeline de transformação de dados automatizado com Docker e Talend em ambiente padronizado.",
    image: "/projects/talend-pipeline.png",
    tech: ["Talend", "Docker", "SQL"],
    link: "https://github.com/ThaisFReis/talend-etl",
  },
  // Adicione mais projetos aqui...
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-pinkAccent mb-8">Projetos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-xl bg-[#2A2A3C] p-4 shadow-md hover:scale-[1.02] transition cursor-pointer"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-pinkAccent">{project.title}</h3>
            <p className="text-sm text-textPrimary mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="bg-pinkAccent/20 text-pinkAccent text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-lavender underline"
            >
              Ver no GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
