import React from "react";
import { motion } from "framer-motion";
import { Github, SquareArrowOutUpRight } from "lucide-react";

import Odonto from "./img/1770477913520.jpg";
import Git from "./img/1767699861791.jpg";
import psica from "./img/1769085586054.jpg";

function Projects() {
  return (
    <section
      id="projetos"
      className="bg-Project1 text-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20 w-full"
    >
      <article>
        <motion.span
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="font-medium text-xs sm:text-sm text-Skills2 tracking-wide"
        >
          // PROJETOS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold pt-4 sm:pt-5 max-w-xl"
        >
          Trabalhos <span className="text-Skills2">recentes</span>
        </motion.h2>
      </article>

      <motion.section
        initial={{ opacity: 0, translateY: "20%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 space-y-12 group"
      >
        {/* Projeto 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="  lg:h-87 2xl:lg:h-87 rounded-xl bg-gray-500/20 p-4">
            <img
              className="rounded-xl w-full object-cover 2xl:h-80 mt-1 group-hover:scale-105 transition-transform duration-200 delay-150"
              src={Odonto}
              alt="Landing Page Odonto"
            />
          </div>

          <section>
            <div className="space-y-4 px-1 sm:px-3">
              <h2 className="group-hover:text-Start5 animate-pulse transition-all duration-150 text-white glow-text text-xl sm:text-2xl">
                Landing Page Odonto
              </h2>
              <span className="font-medium text-sm sm:text-base text-Project3">
                Dashboard completo para gerenciamento de e-commerce com
                gráficos interativos, gestão de produtos e análise de vendas em
                tempo real.
              </span>

              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs sm:text-sm">
                <li className="bg-Project4 text-center rounded-xl py-2 text-Project2">
                  React 19
                </li>
                <li className="bg-Project4 text-center rounded-xl py-2 text-Project2">
                  Tailwind CSS 4
                </li>
                <li className="bg-Project4 text-center rounded-xl py-2 text-Project2">
                  React Router
                </li>
                <li className="bg-Project4 text-center rounded-xl py-2 text-Project2">
                  Vite 7
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href="https://jaumm0.github.io/mrl-odonto/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-Start5 transition-colors"
                >
                  <SquareArrowOutUpRight />
                  <span>Live Demo</span>
                </a>
                <a
                  href="https://github.com/jaumm0/mrl-odonto"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-Start5 transition-colors"
                >
                  <Github />
                  <span>Repositório</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Projeto 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <section className="order-2 lg:order-1">
            <div className="space-y-4 px-1 sm:px-3">
              <h2 className="group-hover:text-Start5 animate-pulse transition-all duration-150 text-white glow-text text-xl sm:text-2xl">
                Search Profile GitHub API
              </h2>
              <span className="font-medium text-sm sm:text-base text-Project3">
                Projeto SearchProfile GitHub API para buscar e visualizar
                perfis do GitHub de forma rápida e organizada. Desenvolvido com
                React, Tailwind CSS e consumo de API, focando em
                componentização, responsividade e interface moderna.
              </span>

              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs sm:text-sm">
                <li className="bg-Project4 text-center rounded-xl py-2 text-Project2">
                  React 19
                </li>
                <li className="bg-Project4 text-center rounded-xl py-2 text-Project2">
                  Tailwind CSS 4
                </li>
                <li className="bg-Project4 text-center rounded-xl py-2 text-Project2">
                  API GitHub
                </li>
                <li className="bg-Project4 text-center rounded-xl py-2 text-Project2">
                  Vite 7
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href="https://jaumm0.github.io/SeachProfilleGitHubAPI/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-Start5 transition-colors"
                >
                  <SquareArrowOutUpRight />
                  <span>Live Demo</span>
                </a>
                <a
                  href="https://github.com/jaumm0/SeachProfilleGitHubAPI"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-Start5 transition-colors"
                >
                  <Github />
                  <span>Repositório</span>
                </a>
              </div>
            </div>
          </section>

          <div className="order-1 lg:order-2  rounded-xl bg-gray-500/20 p-4">
            <img
              className="rounded-xl w-full h-48 object-cover mt-1 group-hover:scale-105 transition-transform duration-150 delay-150"
              src={Git}
              alt="Search Profile GitHub API"
            />
          </div>
        </div>

        {/* Projeto 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className=" rounded-xl bg-gray-500/20 p-4">
            <img
              className="rounded-xl w-full object-cover mt-1 group-hover:scale-105 transition-transform duration-150 delay-150"
              src={psica}
              alt="Landing Page Psiquiatra"
            />
          </div>

          <section>
            <div className="space-y-4 px-1 sm:px-3">
              <h2 className="group-hover:text-Start5 animate-pulse transition-all duration-150 text-white glow-text text-xl sm:text-2xl">
                Landing Page Psiquiatra
              </h2>
              <span className="font-medium text-sm sm:text-base text-Project3">
                Landing page moderna e responsiva para psicólogo, desenvolvida
                com React, Vite e Tailwind CSS. Projeto freelancer com foco em
                performance, design profissional e boas práticas de código,
                publicado no GitHub Pages.
              </span>

              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs sm:text-sm">
                <li className="bg-Project4 text-center rounded-xl py-2 text-Project2">
                  React 19
                </li>
                <li className="bg-Project4 text-center rounded-xl py-2 text-Project2">
                  Tailwind CSS 4
                </li>
                <li className="bg-Project4 text-center rounded-xl py-2 text-Project2">
                  React Router
                </li>
                <li className="bg-Project4 text-center rounded-xl py-2 text-Project2">
                  Vite 7
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href="https://jaumm0.github.io/Page-psicologa-freela/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-Start5 transition-colors"
                >
                  <SquareArrowOutUpRight />
                  <span>Live Demo</span>
                </a>
                <a
                  href="https://github.com/jaumm0/Page-psicologa-freela"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-Start5 transition-colors"
                >
                  <Github />
                  <span>Repositório</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </motion.section>
    </section>
  );
}

export default Projects;