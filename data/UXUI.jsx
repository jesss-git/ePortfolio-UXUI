import React from "react";
import { ProjectGallery } from "eportfolio-shared";
import "./UXUI.css"
import heroImg from "../assets/Images/geeseInvasion/geeseInvasion.png"

export default function UXUI() {
  const UXUIProjects = [
    {
      id: 1,
      image: heroImg,
      title: "UXUI Prroj 1",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
    },
    {
      id: 2,
      image: heroImg,
      title: "UXUI Prroj 2",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
    },
    {
      id: 3,
      image: heroImg,
      title: "UXUI Prroj 3",
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
        title="Featured UX/UI Projects"
        subtitle="Apps, tools, and experiments inspired by climbing and nature."
        projects={UXUIProjects}
      />
    </>
  );
}
