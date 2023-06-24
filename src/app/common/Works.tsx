"use client";

import { motion } from "framer-motion";
import { RiTimerFlashLine } from "react-icons/ri";
import works from "@/app/data/home/works.json";

import { container, item } from "@/app/utils/animation";

const Works = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:gap-x-8 text-center gap-y-8 lg:mx-[6%] lg:grid-cols-2"
    >
      {works.map((details) => (
        <motion.div
          variants={item}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          key={details.id}
        >
          <RiTimerFlashLine size="3em" />
          <h4 className="text-xl">{details.title}</h4>
          <p>{details.details}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Works;
