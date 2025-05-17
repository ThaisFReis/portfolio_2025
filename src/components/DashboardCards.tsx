import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";

export default function DashboardCards() {
  return (
    <section className="grid md:grid-cols-3 gap-4 px-6 pb-16">
      {/* Credenciais */}
      <Card title="Credenciais" icon={<HiOutlineDocumentText />} href="#credentials" />

      {/* Projetos */}
      <Card title="Projetos" icon={<MdOutlineMail />} href="#projects" />

      {/* Blog */}
      <Card title="Blog Técnico" icon={<HiOutlineDocumentText />} href="#blog" />

      {/* Stack */}
      <Card title="Tech Stack" icon={<FaGithub />} href="#tech" />

      {/* Redes sociais */}
      <div className="rounded-xl bg-[#2A2A3C] p-6 flex flex-col justify-between hover:scale-[1.02] transition cursor-pointer">
        <p className="text-sm opacity-70 mb-2">Redes</p>
        <div className="flex gap-4 items-center">
          <FaGithub className="text-xl" />
          <FaLinkedin className="text-xl" />
        </div>
      </div>

      {/* Estatísticas */}
      <div className="rounded-xl bg-[#2A2A3C] p-6 text-center hover:scale-[1.02] transition">
        <h3 className="text-3xl font-bold">+20</h3>
        <p className="text-sm mt-1 opacity-70">Projetos criados</p>
      </div>

      {/* Call to Action */}
      <div className="col-span-3 rounded-xl bg-[#2A2A3C] p-6 text-center hover:scale-[1.02] transition">
        <p className="text-xl">
          Let’s <span className="text-pinkAccent font-semibold">work together!</span>
        </p>
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

function Card({ title, icon, href }: CardProps) {
  return (
    <a
      href={href}
      className="rounded-xl bg-[#2A2A3C] p-6 flex flex-col gap-4 hover:scale-[1.02] transition cursor-pointer"
    >
      <div className="text-3xl text-pinkAccent">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </a>
  );
}
