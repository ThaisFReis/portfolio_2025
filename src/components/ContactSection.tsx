import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

function WhatsAppBox() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = encodeURIComponent(message);
    const phoneNumber = "5521985712371";
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="w-full max-w-lg px-4 sm:px-6 md:px-8">
      <div className="bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 p-6 rounded-2xl border border-lavender/10 shadow-md hover:shadow-lavender/20 transition-all duration-300 backdrop-blur-[3px] flex flex-col gap-5 items-center text-white">
        <textarea
          rows={5}
          className="w-full bg-background/50 text-white text-sm p-4 rounded-xl resize-none focus:outline-none focus:ring-1 focus:ring-lavender/50 transition-all"
          placeholder="Digite aqui e envie via WhatsApp..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-8 rounded-full border-2 border-lavender/20 text-lavender hover:bg-lavender/10 transition-all disabled:opacity-40"
        >
          <FaWhatsapp className="text-xl" />
          Enviar via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-white gap-8 px-4"
    >
      <motion.h2
        className="text-xl sm:text-2xl lg:text-4xl font-extrabold leading-tight tracking-wide font-bebas uppercase text-[#fff]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Me Contate
      </motion.h2>

      <motion.div
        className="flex flex-col sm:flex-row gap-6 text-lg w-2/5 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-evenly gap-5">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsmFSjJZgkFKcMxRRNMWDZbhgKrPfQQDGgSFsVNNLkKsGqlHmMCcQSdkssmGQmPTxgNfsJcBm"
            target="_blank"
            className="py-3 px-8 rounded-full border-2 gap-2 transition-all flex items-center justify-center border-lavender/20 text-lavender hover:bg-lavender/10"
          >
            <FaEnvelope className="text-xl" />
            E-mail
          </a>

          <a
            href="https://www.linkedin.com/in/thaisfreis"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-8 rounded-full border-2 gap-2 transition-all flex items-center justify-center border-lavender/20 text-lavender hover:bg-lavender/10"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
        </div>

        <WhatsAppBox />
      </motion.div>
    </section>
  );
}
