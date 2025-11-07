import React from "react";
import { ProjectGallery } from "eportfolio-shared";
import "./Experience.css"

import heroImg from "../assets/Images/geeseinvasion.png"

import LODCover from "../assets/Images/Heseri-LOD/LODship.png";
import LOD1stats from "../assets/Images/Heseri-LOD/LOD1-Stats.png";
import LOD2stats from "../assets/Images/Heseri-LOD/LOD2-Stats.png";
import LODOrig from "../assets/Images/Heseri-LOD/LOD-Orig.png";
import LODOrigDemo from "../assets/Videos/Heseri-LOD/LOD-Orig-Demo.mov";
import LOD1Demo from "../assets/Videos/Heseri-LOD/LOD1-Demo.mov";
import LOD2Demo from "../assets/Videos/Heseri-LOD/LOD2-Demo.mov";

export default function Experience() {
  const ExperienceProjects = [
    {
      id: 1,
      image: LODCover,
      title: "LOD Optimization for Mobile Game",
      date: "September 2024",
      description: "During my co-op at Heseri Games, I optimizing a performance-heavy mobile game environment by researching, implementing, and refining Level of Detail (LOD) techniques.",
      tags: ["Unity", "C#"],
      sections: [
        {
          images: [
            LODCover,
          ],
        },
        {
          heading: "LOD Optimization for Mobile Game",
        },
        {
          heading: "Project Summary",
          text: [
            "During my co-op at Heseri Games, I optimizing a performance-heavy mobile game environment by researching, implementing, and refining Level of Detail (LOD) techniques to enhance performance on mobile devices without compromising visual quality or gameplay experience. The goal was to significantly reduce rendering load and complexity while maintaining visual fidelity across devices.",
          ],
        },
        {
          images: [
            LODOrigDemo,
          ],
        },
        {
          heading: "Problem Statement",
          text: [
            "One of the game's levels featured a highly detailed environment that caused some performance issues on lower-end mobile devices, containing over 2.4 million triangles and 4.5 million vertices. This caused severe performance drops and bottlenecks on mobile platforms. Heavy geometry and unoptimized assets resulted in frame rate drops, long load times, and suboptimal user experience. The challenge was to reduce the complexity of the environment while preserving its visual quality and gameplay experience.",
            "My task was to research and implement an LOD (Level of Detail) system to dynamically reduce the complexity of rendered models based on camera distance - lowering detail for distant objects while maintaining high detail for nearby objects, thus improving performance without compromising visual quality.",
          ],
        },
        {
          images: [
            LODOrig,
          ],
        },
        {
          text: [
            "Referencing the image above, you can see the original environment model with high polygon counts - 2.4M triangles and 4.5M vertices.",
          ],
        },
        {
          heading: "Role & Responsibilities",
          text: [
            "Position: Game Developer (Co-op)",
            "Responsibilities:",
            "▸ Researched various LOD generation methods and techniques for Unity-based pipelines and suitable for mobile platforms.",
            "▸ Implemented LODs across multiple in-game meshes to optimize real-time rendering performance.",
            "▸ Identified and debugged graphical issues caused by overlapping or misconfigured LOD hierarchies.",
            "▸ Reassessed and refined the LOD implementation to achieve further optimization.",
            "▸ Documented the workflow and performance results for future reference, team knowledge sharing, and future production use.",
          ],
        },
        {
          heading: "Research",
          text: [
            "▸ LOD = Level of Detail (LOD) for meshes",
            "▸ LOD is a technique used in video games and 3D graphics to improve performance by adjusting complexity of 3D models depending on distance from camera or player's viewpoint.",
            "▸ The further an object is from the camera, the less detail it needs to display, allowing the game engine to render less detail an fewer polygons and textures, thus improving performance.",
            "▸ An LOD system reduces the numnber of polygons and textures applied to objects at greater distances.",
            "▸ By implementing a well-designed LOD system, games can maintain higher frame rates and lower computational load by not rendering unnecessary detail for distance objects, while still preserving high-quality visuals for closer objects.",
            "▸ LOD techniques usually involve creating several versions of a 3D model with varying levels of detail, each version containing progressively fewer details, and the game engine switches between these versions based on the camera distance.",
            "▸ High LOD: Full detail, used for nearby objects and when object is close to camera.",
            "▸ Medium LOD: Reduced detail, used for objects farther away at moderate distances.",
            "▸ Low LOD: Minimal detail, used for distant objects that are far from the camera and are often simple silhouettes.",
          ],
        },
        {
          images: [
            LOD1Demo,
          ],
        },
        {
          images: [
            LOD1stats,
          ],
        },
        {
          text: [
            "After implementing LODs, the environment's geometry was significantly reduced to 1.5M triangles and 2.8M vertices, resulting in a 37.5% reduction in triangles and a 37.7% reduction in vertices compared to the original model. This optimization led to improved rendering performance on mobile devices, with smoother frame rates and reduced load times, enhancing the overall user experience without compromising visual quality.",
          ],
        },
        {
          heading: "Process Highlights",
          text: [
            "Performance Profiling:",
            "▸ Measured baseline geometry stats (2.4M tris and 4.5M verts).",
            "▸ Identified high-poly assets and prioritized optimization targets.",
            "Research & Experimentation:",
            "▸ Investigated LOD generation tools and techniques compatible with Unity and mobile platforms.",
            "▸ Investigated Unity's built-in LOD system and external tools for mesh simplification.",
            "▸ Tested multiple LOD configurations to balance reduction with visual quality.",
            "Implementation and Debugging:",
            "▸ Integrated LODs into the game environment and scene hierarchy, replacing high-poly meshes with LOD variants, and adjusted transition distances.",
            "▸ Resolved rendering issues where multiple LOD meshes overlapped, causing visual glitches.",
            "Re-Implementation & Refinement:",
            "▸ Iteratively reworked LODs, optimizing mesh reduction ratios.",
            "▸ Verified improvements using scene statistics and frame rate benchmarks.",
          ],
        },
        {
          images: [
            LOD2Demo,
          ],
        },
        {
          images: [
            LOD2stats,
          ],
        },
        {
          text: [
            "Further refinements led to an even more optimized environment with 964.1k triangles and 1.8M vertices, achieving a 59.8% reduction in triangles and a 60% reduction in vertices compared to the original model. This level of optimization provided substantial performance gains on mobile devices, ensuring a smooth gameplay experience while maintaining acceptable visual fidelity.",
          ],
        },
        {
          heading: "Outcome & Impact",
          text: [
            "▸ Reduced total geometry from 2.4M to 964.1k triangles (≈60% reduction).",
            "▸ Reduced vertex count from 4.5M to 1.8M vertices (≈60% reduction).",
            "▸ Achieved significant performance improvements on mobile devices with smoother frame rates and runtime performance, and reduced load times without noticeable quality loss.",
            "▸ Created a reusable LOD workflow pipeline for future projects and environment assets.",
          ],
        },
        {
          images: [
            LODOrig,
            LOD2stats,
          ],
        },
        {
          heading: "Key Takeways",
          text: [
            "This project deepened my understanding of real-time 3D optimization, LOD techniques, performance profiling, and efficient asset management for mobile game development. I gained hands-on experience in balancing visual fidelity with performance constraints, a critical skill in game development. Additionally, I enhanced my problem-solving abilities by addressing rendering issues and refining optimization strategies through iterative testing and feedback. I learned how small technical adjustments at the mesh level can have a massive impact on runtime efficiency and user experience in mobile gaming.",
          ],
        },
      ],
    },
    {
      id: 2,
      image: heroImg,
      title: "Experience 2",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Unity", "C#"],
      sections: [
        {},
        {},
        {},
        {},
        {},
        {
          heading: "Role & Responsibilities",
          text: [
            "Position: Game Developer (Co-op)",
            "Responsibilities:",
            "▸ ",
            "▸ ",
            "▸ ",
            "▸ ",
            "▸ ",
            "▸ ",
          ],
        },
        {},
        {},
        {},
        {},
        {},
      ],
    },
    {
      id: 3,
      image: heroImg,
      title: "Experience 3",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
      sections: [
        {},
        {},
        {},
        {},
        {},
        {
          heading: "Role & Responsibilities",
          text: [
            "Position: Game Developer (Co-op)",
            "Responsibilities:",
            "▸ ",
            "▸ ",
            "▸ ",
            "▸ ",
            "▸ ",
            "▸ ",
          ],
        },
        {},
        {},
        {},
        {},
        {},
      ],
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
