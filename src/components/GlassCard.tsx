import { motion } from "framer-motion";

type GlassCardBlockProps = {
  icon?: React.ReactNode;
  title: string;
  description: React.ReactNode;
  href?: string;
  image?: string;
  className?: string,
  classNameTitle?: string,
  classNameDescription?: string,
  hiddenFooter?: boolean,
};

export const GlassCard = ({
  icon,
  title,
  description,
  href,
  image,
  className,
  classNameTitle,
  classNameDescription,
  hiddenFooter
}: GlassCardBlockProps) => {
  return (
    <motion.a
      href={href}
      className={`relative group w-full max-w-sm rounded-2xl overflow-hidden border border-lavender/10 shadow-md hover:shadow-lavender/20 transition-all duration-300 !backdrop-blur-[3px] flex flex-col h-fit min-h-56 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* glowing particles */}
      <div className="absolute inset-0 z-0 pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_10%_10%,rgba(93,120,185,0.20)_0%,transparent_20%),radial-gradient(circle_at_20%_20%,rgba(93,120,185,0.08)_0%,transparent_60%)] before:blur-2xl before:opacity-80"></div>

      {/* imagem */}
      {image && (
        <div className="relative z-10">
          <img
            src={image}
            alt={title}
            className="w-full h-44 object-cover rounded-t-2xl opacity-40 transition duration-300 group-hover:opacity-100 group-hover:scale-105"
          />
        </div>
      )}

      {/* conteúdo principal */}
      <div className="relative z-10 flex flex-col flex-grow p-6">
        {icon && <div className="text-2xl mb-2 text-white">{icon}</div>}
        <h3 className={`text-lg font-medium mb-1 uppercase ${classNameTitle}`}>{title}</h3>
        <p className={`text-xs text-gray-300 ${classNameDescription}`}>{description}</p>

        <div className="flex-grow" />

        {!hiddenFooter && (
          <span className="mt-4 text-sm font-medium text-white hover:text-coral transition">
            Saiba mais →
          </span>
        )}
      </div>
    </motion.a>
  );
};
