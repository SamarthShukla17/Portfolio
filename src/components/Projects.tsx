"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";


function Projects() {
    <div>
        <h1 className="top-8 mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl bottom-3">
            Projects
        </h1>
    </div>

  const tabs = [
    {
      title: "Bloggit",
      value: "Bloggit",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-700 to-violet-900">
          <p>Bloggit</p>
          <Image
      src="/bloggit.svg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "E-commerce Store",
      value: "E-commerce Store",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-700 to-violet-900">
          <p>E-commerce Store</p>
          <Image
      src="/ecomerce.svg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
          
        </div>
      ),
    },
    {
      title: "Profile Card 1",
      value: "Profile Card 1",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-700 to-violet-900">
          <p>Profile Card 1</p>
          <Image
      src="/Profilecard1.svg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
          
        </div>
      ),
    },
    {
      title: "Profile Card 2",
      value: "Profile Card 2",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-700 to-violet-900">
          <p>Profile Card 2</p>
          <Image
      src="/profilecard2.svg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
          
        </div>
      ),
    },
    {
      title: "Interactive Carousel",
      value: "Interactive Carousel",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-700 to-violet-900">
          <p>Interactive Carousel</p>
          <Image
      src="/carousel.svg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
          
        </div>
      ),
    },
    {
        title: "Music",
        value: "Music",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-700 to-violet-900">
            <p>Music</p>
            <Image
      src="/music1.svg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
            
          </div>
        ),
      },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default Projects;
