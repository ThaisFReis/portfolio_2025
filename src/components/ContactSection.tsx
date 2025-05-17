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
      className="relative px-6 py-16 bg-[#1E1E2F] text-textPrimary flex flex-col items-center"
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-pinkAccent mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Vamos conversar? ✨
      </motion.h2>

      <motion.form
        className="w-full max-w-xl space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm mb-1">Nome</label>
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full bg-[#2A2A3C] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinkAccent"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="w-full bg-[#2A2A3C] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinkAccent"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Mensagem</label>
          <textarea
            rows={5}
            placeholder="Escreva sua mensagem..."
            className="w-full bg-[#2A2A3C] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinkAccent"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-pinkAccent text-background px-6 py-2 rounded-full hover:opacity-90 transition"
        >
          Enviar mensagem
        </button>
      </motion.form>

      <div className="flex gap-6 mt-10">
        <a
          href="https://github.com/ThaisFReis"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-pinkAccent hover:scale-110 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/thaisfreis"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-pinkAccent hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 bg-lavender text-background px-6 py-3 rounded-xl shadow-lg"
          >
            ✨ Sua mensagem foi enviada com sucesso!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
