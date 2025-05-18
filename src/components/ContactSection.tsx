import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-white gap-8"
    >
      <motion.h2
        className="text-2xl laptop:text-4xl font-extrabold leading-tight tracking-wide font-bebas uppercase text-[#fff]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Me Contate:
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center group w-[40rem] rounded-2xl p-6 border border-lavender/5 shadow-md transition-all duration-300 backdrop-blur-[3px] gap-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <label className="block text-sm mb-1 text-gray-300">Nome</label>
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full bg-[#fff0] border border-lavender/10 text-[#fff] font-medium p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">Email</label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="w-full bg-[#fff0] border border-lavender/10 text-[#fff] font-medium p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">Mensagem</label>
          <textarea
            rows={5}
            placeholder="Escreva sua mensagem..."
            className="w-full bg-[#fff0] border border-lavender/10 text-[#fff] font-medium p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-coral/30 text-[#fff] border border-coral/40 px-4 py-2 rounded-full font-medium hover:bg-coral transition mx-auto my-4"
        >
          Enviar mensagem
        </button>
        <div></div>
      </motion.form>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed bottom-10 bg-coral text-[#fff] px-6 py-3 rounded-xl shadow-lg backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            ✨ Sua mensagem foi enviada com sucesso!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
