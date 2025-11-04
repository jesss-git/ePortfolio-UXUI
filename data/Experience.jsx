import React from "react";
import { ProjectGallery } from "eportfolio-shared";
import "./Experience.css"
import heroImg from "../assets/Images/geeseinvasion.png"

export default function Experience() {
  const ExperienceProjects = [
    {
      id: 1,
      image: heroImg,
      title: "Experience 1",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
    },
    {
      id: 2,
      image: heroImg,
      title: "Experience 2",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
    },
    {
      id: 3,
      image: heroImg,
      title: "Experience 3",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
    },
  ];

  return (
    <>
      <section
        className="codehero"
        style={{
          backgroundImage: `url(${heroImg})`, 
        }}
      ></section>


      <ProjectGallery
        title="Featured Experience"
        subtitle="Apps, tools, and experiments inspired by climbing and nature."
        projects={ExperienceProjects}
      />
    </>
  );
}
