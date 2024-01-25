// Next
"use client";
import Image from "next/image";

// Motion Framer
import { motion } from "framer-motion";

// Project
import projetoOne from "@/app/assets/images/project/shop-cart.png";
import projetoTwo from "@/app/assets/images/project/jogo-da-memoria.png";
import projetoThree from "@/app/assets/images/project/calculadora.jpeg";
import projetoFour from "@/app/assets/images/project/fitnes.png";
import projetoSix from "@/app/assets/images/project/rick-morty.png";
import projetoSeven from "@/app/assets/images/project/timer-react.jpeg";
import projetoEight from "@/app/assets/images/project/mosquito.jpeg";

// Skills
import html from "@/app/assets/images/skills/html.svg";
import css from "@/app/assets/images/skills/css.svg";
import javascript from "@/app/assets/images/skills/javascript.svg";
import react from "@/app/assets/images/skills/react.svg";
import nextjs from "@/app/assets/images/skills/nextjs.svg";
import tailwindcss from "@/app/assets/images/skills/tailwindcss.svg";
import typescript from "@/app/assets/images/skills/typescript.svg";
import vite from "@/app/assets/images/skills/vite.svg";

export default function Project() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10 p-12 min-h-screen"
    >
      <div>
        <h1 className="text-white text-4xl font-bold">
          Trabalho, hobby & open source
        </h1>
        <p className="text-white">
          Sou fanático pela criação de novos projetos, pois é a maior chave para
          ganhar conhecimento. Nesta página você pode navegar para 2 aplicações
          na qual desenvolvi.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5 p-5 bg-neutral-900 border-2 border-neutral-700 rounded-xl">
          <Image src={projetoOne} alt="projetos recentes" />
          <h2 className="text-white text-xl font-semibold">
            Carrinho De Compras
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, perferendis?
          </p>
          <div className="flex gap-5">
            <Image className="w-6" src={react} alt="css3" />
            <Image className="w-6" src={css} alt="css3" />
            <Image className="w-6" src={html} alt="css3" />
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5 bg-neutral-900 border-2 border-neutral-700 rounded-xl">
          <Image src={projetoSix} alt="projetos recentes" />
          <h2 className="text-white text-xl font-semibold">Jogo Da Memoria</h2>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, perferendis?
          </p>
          <div className="flex gap-5">
            <Image className="w-6" src={nextjs} alt="css3" />
            <Image className="w-6" src={tailwindcss} alt="css3" />
            <Image className="w-6" src={javascript} alt="css3" />
            <Image className="w-6" src={typescript} alt="css3" />
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5 bg-neutral-900 border-2 border-neutral-700 rounded-xl">
          <Image src={projetoSeven} alt="projetos recentes" />
          <h2 className="text-white text-xl font-semibold">Temporizador</h2>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, perferendis?
          </p>
          <div className="flex gap-5">
            <Image className="w-6" src={react} alt="css3" />
            <Image className="w-6" src={javascript} alt="css3" />
            <Image className="w-6" src={css} alt="css3" />
            <Image className="w-6" src={vite} alt="css3" />
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5 bg-neutral-900 border-2 border-neutral-700 rounded-xl">
          <Image src={projetoThree} alt="projetos recentes" />
          <h2 className="text-white text-xl font-semibold">Calculadora</h2>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, perferendis?
          </p>
          <div className="flex gap-5">
            <Image className="w-6" src={react} alt="css3" />
            <Image className="w-6" src={javascript} alt="css3" />
            <Image className="w-6" src={css} alt="css3" />
            <Image className="w-6" src={vite} alt="css3" />
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5 bg-neutral-900 border-2 border-neutral-700 rounded-xl">
          <Image src={projetoFour} alt="projetos recentes" />
          <h2 className="text-white text-xl font-semibold">Fitnes</h2>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, perferendis?
          </p>
          <div className="flex gap-5">
            <Image className="w-6" src={javascript} alt="css3" />
            <Image className="w-6" src={css} alt="css3" />
            <Image className="w-6" src={html} alt="css3" />
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5 bg-neutral-900 border-2 border-neutral-700 rounded-xl">
          <Image src={projetoTwo} alt="projetos recentes" />
          <h2 className="text-white text-xl font-semibold">Jogo Da Memoria</h2>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, perferendis?
          </p>
          <div className="flex gap-5">
            <Image className="w-6" src={javascript} alt="css3" />
            <Image className="w-6" src={css} alt="css3" />
            <Image className="w-6" src={html} alt="css3" />
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5 bg-neutral-900 border-2 border-neutral-700 rounded-xl">
          <Image src={projetoEight} alt="projetos recentes" />
          <h2 className="text-white text-xl font-semibold">Jogo do Mosquito</h2>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, perferendis?
          </p>
          <div className="flex gap-5">
            <Image className="w-6" src={javascript} alt="css3" />
            <Image className="w-6" src={css} alt="css3" />
            <Image className="w-6" src={html} alt="css3" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
