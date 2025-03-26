export const projects = [
  {
    id: 1,
    type: "image",
    title: "Project Title 1",
    shortDescription: "Brief description for the card view",
    description: `
      A detailed description of the project.
      You can include multiple paragraphs and details here.
      
      This is where you can explain:
      - The concept behind the project
      - Your role and contributions
      - Technical details
      - The impact or results
    `,
    mainImage: "/project_imgs/project_1/1.png",
    images: [
      {
        src: "/project_imgs/project_1/1.png",
        caption: "Main view of the project",
      },
      {
        src: "/project_imgs/project_1/2.png",
        caption: "Detail showing specific feature",
      },
      {
        src: "/project_imgs/project_1/3.png",
        caption: "Another perspective",
      },
      {
        src: "/project_imgs/project_1/4.png",
        caption: "Process documentation",
      },
      {
        src: "/project_imgs/project_1/5.png",
        caption: "Final result",
      },
    ],
    tags: ["Interactive", "Installation", "Unity"],
    year: "2023",
    role: "Lead Developer & Artist",
    tools: ["Unity", "C#", "Arduino"],
    links: [
      {
        title: "Project Website",
        url: "https://example.com/project1",
      },
      {
        title: "Documentation",
        url: "https://example.com/project1/docs",
      },
    ],
  },
  {
    id: 2,
    type: "image",
    title: "Project Title 2",
    shortDescription: "Brief description for the card view",
    description: `
      Detailed description of the second project.
      Include all relevant information here.
      
      You can format this text with:
      - Key features
      - Technical challenges
      - Creative process
      - Outcomes
    `,
    mainImage: "/project_imgs/project_2/1.png",
    images: [
      {
        src: "/project_imgs/project_2/1.png",
        caption: "Overview",
      },
      {
        src: "/project_imgs/project_2/2.png",
        caption: "Detail view",
      },
      {
        src: "/project_imgs/project_2/3.png",
        caption: "Process shot",
      },
      {
        src: "/project_imgs/project_2/4.png",
        caption: "Technical diagram",
      },
      {
        src: "/project_imgs/project_2/5.png",
        caption: "Final implementation",
      },
    ],
    tags: ["Digital Art", "Processing", "Generative"],
    year: "2023",
    role: "Artist & Developer",
    tools: ["Processing", "Java", "Custom Software"],
  },
  {
    id: 3,
    type: "video",
    title: "Animation Project",
    shortDescription: "Featured animation work",
    description: `
      Description of the animation project.
      Explain the concept, process, and technical details.
      
      Include information about:
      - Animation technique
      - Software used
      - Duration
      - Purpose
    `,
    mainVideo: "/project_imgs/project_3/1.mov",
    tags: ["Animation", "Motion Graphics", "3D"],
    year: "2023",
    role: "Animator",
    tools: ["Maya", "After Effects"],
  },
  {
    id: 4,
    type: "video",
    title: "Interactive Media Installation",
    shortDescription: "Interactive media project",
    description: `
      Details about the interactive media installation.
      Explain how users interact with the piece and the technology behind it.
      
      Cover aspects like:
      - Interaction design
      - Technical implementation
      - Exhibition details
      - User experience
    `,
    mainVideo: "/project_imgs/project_4/bazookaMoon.mp4",
    tags: ["Interactive", "Installation", "Physical Computing"],
    year: "2023",
    role: "Installation Artist & Developer",
    tools: ["Max/MSP", "Arduino", "Custom Hardware"],
  },
];
