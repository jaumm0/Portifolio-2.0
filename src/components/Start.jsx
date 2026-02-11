import React from "react";
import { motion } from "framer-motion";

function Start() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center bg-Start4 text-center w-full min-h-screen px-4 sm:px-6 lg:px-20 py-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-[120px] sm:blur-[140px] animate-pulse-glow" />

      <div className="relative max-w-4xl mx-auto flex flex-col gap-4">
        <motion.span
          initial={{ opacity: 0, translateY: "20%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="font-medium text-sm sm:text-base text-Start3"
        >
          Frontend Developer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, translateY: "20%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl  text-Start1 leading-tight "
        >
          Olá, eu sou{" "}
          <span className="text-Start5 animate-pulse delay-700 text-gradient  glow-text">
            Dev Joao
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, translateY: "10%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="font-medium text-sm sm:text-base md:text-lg text-Start2 pt-3 max-w-2xl mx-auto"
        >
          Crio experiências digitais modernas, performáticas e acessíveis.
          <br className="hidden sm:block" />
          <span className="hidden sm:inline">
            {" "}
            Transformo ideias em interfaces que encantam.
          </span>
          <span className="sm:hidden">
            Transformo ideias em interfaces que encantam.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, translateY: "20%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projetos"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-40 h-12 rounded-xl bg-Start5 hover:glow-strong transition-shadow duration-300 text-Start4 font-medium">
              Ver Projetos
            </button>
          </a>
          <a
            href="#contato"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-40 h-12 border rounded-xl text-Start1 font-medium">
              Falar comigo
            </button>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-gray-400"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

export default Start;