import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <section
      id="contato"
      className="bg-Footer2 text-white text-center px-4 sm:px-6 lg:px-20 py-16 sm:py-20 w-full"
    >
      <article className="max-w-3xl mx-auto grid grid-rows-[auto_auto_auto_auto_auto] gap-4 place-items-center">
        <motion.span
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="font-medium text-xs sm:text-sm text-Footer1 tracking-wide"
        >
          // CONTATO
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold pt-2"
        >
          Vamos trabalhar <span className="text-Skills2">juntos?</span>
        </motion.h2>

        <p className="font-medium text-sm sm:text-base md:text-lg text-Footer3 pt-2">
          Estou sempre aberto a novos projetos e oportunidades. Se você tem uma
          ideia ou quer bater um papo, entre em contato!
        </p>

        <div className="mt-2">
          <a href="mailto:seuemail@email.com">
            <button className="rounded-xl w-56 sm:w-60 h-12 sm:h-14 mt-4 bg-Footer1 font-medium text-black text-sm sm:text-base">
              seuemail@email.com
            </button>
          </a>
        </div>

        <ul className="grid grid-cols-3 gap-4 sm:gap-5 place-items-center pt-5">
          <li>
            <a
              href="https://github.com/jaumm0"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border p-2 rounded-lg border-Footer3 text-Footer3 hover:text-Footer1 hover:border-Footer1 transition-all duration-150">
                <Github />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/joaoanjoadev/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border p-2 rounded-lg border-Footer3 text-Footer3 hover:text-Footer1 hover:border-Footer1 transition-all duration-150">
                <Linkedin />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=5567993404143&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border p-2 rounded-lg border-Footer3 text-Footer3 hover:text-Footer1 hover:border-Footer1 transition-all duration-150">
                <MessageCircle />
              </div>
            </a>
          </li>
        </ul>

        <div className="w-full max-w-md bg-white/10 border border-Footer3/40 mt-10" />
        <p className="pt-3 font-medium text-xs sm:text-sm text-Footer3">
          © 2026 <span className="text-Footer1">Dev Joao</span>
        </p>
      </article>
    </section>
  );
}

export default Footer;