import { GlassCard } from "./GlassCard";

export default function AboutSection() {
  return (
    <section
      id="about"
      className=" laptop:px-72 py-32 bg-transparent flex flex-col justify-center gap-20 min-h-screen items-center w-screen">
      <p className="font-light ml-auto mr-0">
        Olá! Eu sou a Thais. Eu sou uma{" "}
        <span className="text-[#fff] italic font-normal">
          desenvolvedora front-end e analista de dados
        </span>
        . <br /> Com mais de{" "}
        <span className="text-[#fff] italic font-normal">2 anos</span> de
        experiência
      </p>
      <div className="grid grid-cols-2">
        <GlassCard
          title="Linguagens"
          description={
            <>
              JavaScript <span className="text-coral"> • </span> Python<span className="text-coral"> • </span>Java<span className="text-coral"> • </span>SQL<span className="text-coral"> • </span>TypeScript
            </>              
          }
          className="!shadow-none transition-none duration-0 !w-fit !min-h-fit p-2"
          hiddenFooter={true}
        />
        <GlassCard
          title="Front-End"
          description={
            <>
              React<span className="text-coral"> • </span>Astro<span className="text-coral"> • </span>Vite<span className="text-coral"> • </span>NextJs<span className="text-coral"> • </span>Jest<span className="text-coral"> • </span>CSS<span className="text-coral"> • </span>Tailwind<span className="text-coral"> • </span>SASS<span className="text-coral"> • </span>MUI<span className="text-coral"> • </span>Material UI
            </>
          }
          className="!shadow-none transition-none duration-0 !w-fit !min-h-fit p-2"
          hiddenFooter={true}
        />

        <GlassCard
          title="Back-End"
          description={
            <>
              NodeJs<span className="text-coral"> • </span>Express<span className="text-coral"> • </span>MongoDB<span className="text-coral"> • </span>MySQL<span className="text-coral"> • </span>Nest<span className="text-coral"> • </span>Prisma
            </>
          }
          className="!shadow-none transition-none duration-0 !w-fit !min-h-fit p-2"
          hiddenFooter={true}
        />

        <GlassCard
          title="Ferramentas"
          description={
            <>
              Docker<span className="text-coral"> • </span>N8N<span className="text-coral"> • </span>Talend Studio<span className="text-coral"> • </span>Git/GitHub<span className="text-coral"> • </span>Firebase<span className="text-coral"> • </span>Figma
            </>
          }
          className="!shadow-none transition-none duration-0 !w-fit !min-h-fit p-2"
          hiddenFooter={true}
        />
      </div>
    </section>
  );
}
