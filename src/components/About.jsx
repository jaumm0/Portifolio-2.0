import React from "react";
import MagicBento from "./MagicBento";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="sobre"
      className="grid grid-rows-[auto_auto_auto_minmax(0,1fr)] gap-6 items-start px-4 sm:px-6 lg:px-20 py-16 sm:py-20 bg-About1  min-h-300 lg:min-h-100 w-full text-white"
    >
      <motion.p
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        className="font-medium text-xs sm:text-sm text-About3 tracking-wide"
      >
        // SOBRE MIM
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl lg:max-w-none"
      >
        Construindo o futuro,{" "}
        <span className="text-About3">um pixel por vez</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, translateY: "20%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        className="text-sm sm:text-base font-medium text-About2 max-w-2xl"
      >
        Sou um desenvolvedor frontend apaixonado por criar interfaces que
        combinam estética e funcionalidade. Com experiência em React,
        TypeScript e todo o ecossistema moderno do frontend, busco sempre
        entregar produtos que façam a diferença na vida dos usuários.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, translateY: "20%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full place-items-center"
      >
        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />
      </motion.div>
    </motion.section>
  );
}

export default About;