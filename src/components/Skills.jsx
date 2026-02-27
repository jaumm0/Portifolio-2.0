import React from "react";
import { motion } from "framer-motion";


function Skills() {
  return (
    <section
      id="skills"
      className="grid grid-cols-1 lg:grid-cols-[60%_40%] bg-Skills1 text-white items-start px-4 sm:px-6 lg:px-20 py-16 sm:py-20 min-h-screen 2xl:min-h-150 w-full"
    >
      <article>
        <motion.span
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="font-medium text-xs sm:text-sm text-Skills2 tracking-wide"
        >
          // SKILLS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold pt-4 md:pt-5 max-w-xl lg:max-w-none"
        >
          Tecnologias &{" "}
          <span className="text-Skills2">Ferramentas</span>
        </motion.h2>

        <article className="mt-6">
          <ul className="space-y-4">
            <li>
              <div className="flex justify-between items-center py-1">
                <p className="text-sm sm:text-base">React</p>
                <p className="text-sm sm:text-base font-medium text-Skills2">92%</p>
              </div>
              <motion.div className="w-full h-2 bg-Skills3 rounded-xl">
                <motion.div
                  initial={{ opacity: 0, translateX: "-50%" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 1 }}
                  className="w-11/12 h-2 rounded-xl bg-Skills2"
                />
              </motion.div>
            </li>

            <li>
              <div className="flex justify-between items-center py-1">
                <p className="text-sm sm:text-base">Javascript</p>
                <p className="text-sm sm:text-base font-medium text-Skills2">75%</p>
              </div>
              <motion.div className="w-full h-2 bg-Skills3 rounded-xl">
                <motion.div
                  initial={{ opacity: 0, translateX: "-50%" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 1 }}
                  className="w-3/4 h-2 rounded-xl bg-Skills2"
                />
              </motion.div>
            </li>

            <li>
              <div className="flex justify-between items-center py-1">
                <p className="text-sm sm:text-base">Tailwind CSS</p>
                <p className="text-sm sm:text-base font-medium text-Skills2">80%</p>
              </div>
              <motion.div className="w-full h-2 bg-Skills3 rounded-xl">
                <motion.div
                  initial={{ opacity: 0, translateX: "-50%" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 1 }}
                  className="w-4/5 h-2 rounded-xl bg-Skills2"
                />
              </motion.div>
            </li>

            <li>
              <div className="flex justify-between items-center py-1">
                <p className="text-sm sm:text-base">TypeScript</p>
                <p className="text-sm sm:text-base font-medium text-Skills2">40%</p>
              </div>
              <motion.div className="w-full h-2 bg-Skills3 rounded-xl">
                <motion.div
                  initial={{ opacity: 0, translateX: "-50%" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 1 }}
                  className="w-2/5 h-2 rounded-xl bg-Skills2"
                />
              </motion.div>
            </li>

            <li>
              <div className="flex justify-between items-center py-1">
                <p className="text-sm sm:text-base">Figma</p>
                <p className="text-sm sm:text-base font-medium text-Skills2">80%</p>
              </div>
              <motion.div className="w-full h-2 bg-Skills3 rounded-xl">
                <motion.div
                  initial={{ opacity: 0, translateX: "-50%" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 1 }}
                  className="w-4/5 h-2 rounded-xl bg-Skills2"
                />
              </motion.div>
            </li>
          </ul>
        </article>
      </article>

      <motion.aside
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 lg:mt-0 lg:pl-10 flex flex-col gap-4"
      >
        <p className="text-sm sm:text-base font-medium text-Skills4">
          Outras ferramentas e tecnologias:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-sm">
          <div className="border border-Skills4 text-Skills4 hover:border-Skills2 hover:text-Skills2 transition-all duration-150 rounded-lg h-9 px-2 py-1 text-center text-xs sm:text-sm flex items-center justify-center">
            Git
          </div>
          <div className="border border-Skills4 text-Skills4 hover:border-Skills2 hover:text-Skills2 transition-all duration-150 rounded-lg h-9 px-2 py-1 text-center text-xs sm:text-sm flex items-center justify-center">
            Supabase
          </div>
          <div className="border border-Skills4 text-Skills4 hover:border-Skills2 hover:text-Skills2 transition-all duration-150 rounded-lg h-9 px-2 py-1 text-center text-xs sm:text-sm flex items-center justify-center">
            GitHub
          </div>
          <div className="border border-Skills4 text-Skills4 hover:border-Skills2 hover:text-Skills2 transition-all duration-150 rounded-lg h-9 px-2 py-1 text-center text-xs sm:text-sm flex items-center justify-center">
            Vite
          </div>
          <div className="border border-Skills4 text-Skills4 hover:border-Skills2 hover:text-Skills2 transition-all duration-150 rounded-lg h-9 px-2 py-1 text-center text-xs sm:text-sm flex items-center justify-center">
            MySQL
          </div>
          <div className="border border-Skills4 text-Skills4 hover:border-Skills2 hover:text-Skills2 transition-all duration-150 rounded-lg h-9 px-2 py-1 text-center text-xs sm:text-sm flex items-center justify-center">
            REST APIs
          </div>
        </div>
      </motion.aside>
    </section>
  );
}

export default Skills;