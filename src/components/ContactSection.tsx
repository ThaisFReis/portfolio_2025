import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true); // ativa animação

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setError(false);
          formRef.current?.reset();
        },
        () => {
          setError(true);
        }
      )
      .finally(() => {
        setLoading(false);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 3000);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-white gap-6 px-4"
    >
      <motion.h2
        className="text-xl sm:text-2xl lg:text-4xl font-extrabold leading-tight tracking-wide font-bebas uppercase text-[#fff]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Me Contate:
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        ref={formRef}
        className="flex flex-col justify-center group w-full max-w-md sm:max-w-lg lg:max-w-2xl rounded-2xl p-6 border border-lavender/5 shadow-md transition-all duration-300 backdrop-blur-[3px] gap-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <label className="block text-sm mb-1 text-gray-300">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Escreva seu nome"
            className="w-full bg-[#fff0] border border-lavender/5 text-[#fff] font-medium p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">Email</label>
          <input
            type="email"
            name="e-mail"
            placeholder="Escreva seu email"
            className="w-full bg-[#fff0] border border-lavender/5 text-[#fff] font-medium p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">Mensagem</label>
          <textarea
            rows={5}
            name="message"
            placeholder="Escreva sua mensagem..."
            className="w-full bg-[#fff0] border border-lavender/5 text-[#fff] font-medium p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 bg-coral/30 text-[#fff] border border-coral/40 px-6 py-2 rounded-full font-medium transition mx-auto my-4 ${
            loading ? "opacity-60 cursor-not-allowed" : "hover:bg-coral"
          }`}
        >
          {loading && (
            <motion.span
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          {loading ? "Enviando..." : "Enviar mensagem"}
        </button>
      </motion.form>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className={`fixed bottom-10 px-6 py-3 rounded-xl shadow-lg backdrop-blur-md z-50 ${
              error ? "bg-red-500" : "bg-coral"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {error
              ? "❌ Ocorreu um erro ao enviar sua mensagem."
              : "✨ Sua mensagem foi enviada com sucesso!"}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
