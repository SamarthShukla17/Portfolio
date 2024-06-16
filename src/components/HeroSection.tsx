"use client"
import Link from "next/link"
import { LampContainer } from "./ui/lamp"
import {motion} from "framer-motion"
import { Button } from "./ui/moving-border";



function HeroSection() {
  return (
    <LampContainer className="top-40">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="top-4 mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Freelance/Remote <br /> Web-Developer
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">I am Samarth Shukla, a Web-developer. I specialize in frontend web-development, mainly use NextJs and Ui Libraries such as Aceternity and Shadcn. I also use framewoks like Angular, React, Svelte and Vue.</p>
      </motion.h1>
    </LampContainer>
  )
}

export default HeroSection