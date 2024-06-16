import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../utils/cn"


function Timeline() {
  const words = [
    {
        text: "Skills",
        className: "text-5xl text-blue-500 dark:text-blue-500 justify-center"
    },
  ];
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
   
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base text-5xl ">
        My journey
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
    </div>
  );
}


export default Timeline
