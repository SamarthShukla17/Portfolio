"use client";
import { SparklesCore } from "./ui/sparkles";
import { ButtonsCard } from "./ui/tailwindcss-buttons"; 
import { PinContainer } from "./ui/3d-pin";



function Footer() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#00BCD4"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-10">
        Building great products
      </h1>
      
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            I am a sophomore at KIIT, Bhubaneswar, currently persuing B.tech in Computer Science Engineering. I also play for the university u-19 cricket team.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Pricing (Soon...)
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
          <ul>
            <li>
            <a
              href="https://github.com/SamarthShukla17"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
            </li>
            <li>
              <a
              href="https://www.linkedin.com/in/samarth-shukla-9770462a4/"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            </li>
            <li>
            <a
              href="https://x.com/Sam39741"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            </li>
            <li>
            <a
              href="https://www.instagram.com/samarthwkb17"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>Bhubaneswar, India</p>
          <p>Bhubaneswar 751024</p>
          <a href="paarthsamarth@gmail.com"><p>Email: paarthsamarth@gmail.com</p></a>
          <p>Phone: (+91) 9369976077</p>
        </div>
        </div>
    </footer>

  </div>  
  );
}

export default Footer