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
      className="relative group w-full max-w-sm rounded-2xl p-6 text-white overflow-hidden border border-lavender/5 bg-white/5 shadow-md hover:shadow-coral/40 transition-all duration-300 backdrop-blur-[3px] flex flex-col gap-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* glowing particle background */}
      <div className="absolute inset-0 z-0 pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_30%,rgba(255,107,107,0.08)_0%,transparent_70%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.04)_0%,transparent_80%)] before:blur-lg before:opacity-80"></div>

      {/* conteúdo em cima */}
      <div className="relative z-10">
        {icon && <div className="text-2xl mb-2 text-white">{icon}</div>}
        <h3 className="text-lg font-semibold mb-1 text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
        <span className="inline-block mt-4 text-sm font-medium text-white hover:text-coral transition">
          Learn more →
        </span>
      </div>
    </motion.a>
  );
}
