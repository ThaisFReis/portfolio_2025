import { GlassCard } from "./GlassCard";

const cards = [
  {
    title: "PROJETO 1",
    description: "Infuse seus designs com um padrão granulado e brilho sutil.",
    link: "#",
  },
  {
    title: "PROJETO 2",
    description: "Sistema de análise de dados com visual moderno e backend robusto.",
    link: "#",
  },
  {
    title: "PROJETO 3",
    description: "Painel interativo criado com React, Tailwind e animações suaves.",
    link: "#",
  },
];

export const GlassCardGrid = () => {
  return (
    <section className="px-6 py-16 bg-transparent flex flex-wrap justify-center gap-6">
      {cards.map((card, i) => (
        <GlassCard
          key={i}
          title={card.title}
          description={card.description}
          href={card.link}
        />
      ))}
    </section>
  );
}