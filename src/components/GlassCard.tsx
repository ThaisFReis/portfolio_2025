import { motion } from "framer-motion";

type GlassCardBlockProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href: string;
};

export const GlassCard = ({
  icon,
  title,
  description,
  href,
}: GlassCardBlockProps) => {
  return (
    <motion.a
      href={href}
      className="relative group w-full max-w-sm rounded-2xl p-6 text-white overflow-hidden border border-lavender/5 bg-white/5 shadow-sm hover:shadow-lavender/40 transition-all duration-200 backdrop-blur-[3px] flex flex-col gap-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* glowing particles with two light sources */}
      <div className="absolute inset-0 z-0 pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_10%_10%,rgba(93,120,185,0.20)_0%,transparent_20%),radial-gradient(circle_at_20%_20%,rgba(93,120,185,0.08)_0%,transparent_60%)] before:blur-2xl before:opacity-80"></div>

      {/* conteúdo principal */}
      <div className="relative z-10 flex flex-col flex-grow">
        {icon && <div className="text-2xl mb-2 text-white">{icon}</div>}
        <h3 className="text-lg font-semibold mb-1 text-[#fff]">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>

        {/* espaçador + botão fixo no fim */}
        <div className="flex-grow" />
        <span className="mt-4 text-sm font-medium text-[#fff] hover:text-coral transition">
          Saiba mais →
        </span>
      </div>
    </motion.a>
  );
};
