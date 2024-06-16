import { TracingBeam } from "./ui/tracing-beam";
import { twMerge } from "tailwind-merge";



function Timeline2() {
    return (

      <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {TimelineContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
  
            <p className={twMerge("text-xl mb-4")}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
      
    </TracingBeam>
         

    );
  }

    const TimelineContent = [
        {
            title: "HTML"
        },
        {
            title:"CSS"
        },
        {
            title:"Javascript"
        },
        {
            title:"Tailwind CSS"
        },
        {
            title:"SASS"
        },
        {
            title:"ReactJs"
        },
        {
            title:"NextJs"
        },
        {
            title:"UI Libraries"
        }
    ]

export default Timeline2