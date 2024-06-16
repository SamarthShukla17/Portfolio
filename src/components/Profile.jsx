import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";



function Profile() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 w-full h-full">
      </div>
      <div className="relative w-full h-auto flex justify-center items-center">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              Samarth Shukla
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Fun Fact: I am a Professional Cricketer
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/me.svg"
                width={100}
                height={100}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/SamarthShukla17"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                My Github →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Message me
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
   
  );
}

export default Profile