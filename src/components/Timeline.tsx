"use client"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Vortex } from "./ui/vortex";
import { cn } from "../utils/cn"


function Timeline() {
  const words = [
    {
        text: "Skills, Projects and Services",
        className: "text-5xl text-cyan-500 dark:text-white-500 justify-center"
    },
  ];
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <div className="w-[calc(100%)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={1000}
        particleCount={500}
        baseHue={160}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-0 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          My Journey...
        </h2>
        <TypewriterEffectSmooth words={words} />
      </Vortex>
    </div>
   
    
      
    
    </div>
  );
}


export default Timeline
