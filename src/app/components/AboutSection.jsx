"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
    <ul className="flex flex-row flex-wrap space-x-2 space-y-1">
      <li className="w-auto border-2 border-white rounded-2xl p-4">Python</li>
      <li className="w-auto border-2 border-white rounded-2xl p-4 m-1">React</li>
      <li className="w-auto border-2 border-white rounded-2xl p-4 m-1">Redux</li>
      <li className="w-auto border-2 border-white rounded-2xl p-4 m-1">Typescript</li>
      <li className="w-auto border-2 border-white rounded-2xl p-4">PostgreSQL</li>
      <li className="w-auto border-2 border-white rounded-2xl p-4">Next.js</li>
      <li className="w-auto border-2 border-white rounded-2xl p-4">Node.js</li>
      <li className="w-auto border-2 border-white rounded-2xl p-4">JavaScript</li>
      <li className="w-auto border-2 border-white rounded-2xl p-4">Docker</li>
      <li className="w-auto border-2 border-white rounded-2xl p-4">Traefik</li>
      <li className="w-auto border-2 border-white rounded-2xl p-4">Locust</li>
      <li className="w-auto border-2 border-white rounded-2xl p-4">Grafana</li>
    </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Code</li>
        <li>Lebanese University, Faculty of Science </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Associate</li>
        <li>Google Practitioner Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={550} height={550} alt="about-image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a Full Stack Engineer with experience developing and maintaining scalable backend and frontend services for high-traffic web applications. I hold a Masters degree in Computer Science with a focus on GIS and Data Science, and I am passionate about creating impactful digital experiences.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
