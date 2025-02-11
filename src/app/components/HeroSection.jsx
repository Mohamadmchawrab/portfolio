"use client";
import React, { useRef , useEffect} from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
// import Resume from '../../../public/resume.pdf';


const HeroSection = () => {
  const videoRef = useRef(null); // Create a ref for the video element

  useEffect(() => {
    const video = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play(); // Play the video when it enters the viewport
        } else {
          video.pause(); // Pause the video when it leaves the viewport
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Video needs to be 50% in view to play
    });

    if (video) observer.observe(video);

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Mo",
                1000,
                "FullStack Dev",
                1000,
                "Data analyst",
                1000,
                // "UI/UX Designer",
                // 1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           A Full Stack Engineer with experience developing and maintaining scalable
           backend and frontend services for high-traffic web applications. I hold a Masters
            degree in Computer Science with a focus on GIS and Data Science, and I am passionate
             about creating impactful digital experiences.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Contact Me
            </Link>
            <Link
              download
              href="/resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {/* <a href='/resume.pdf' download className="btn"> */}
                  Download CV
                {/* </a> */}
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
          <video
            ref={videoRef}
            src="/videos/video-hero.mp4"
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
