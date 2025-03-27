export const projects = [
  {
    id: 1,
    type: "image",
    title: "Transportation card set",
    shortDescription: "card set created in a course with Rutu Modan",
    description: `
      Created a set of cards as part of a course assignment, "illustration with Rutu Modan".
      I used special oil color sticks, with inspiration from local cars.
    `,
    mainImage: "protfolio/project_imgs/project_1/1.png",
    images: [
      {
        src: "protfolio/project_imgs/project_1/1.png",
        caption: "Eged Buses",
      },
      {
        src: "protfolio/project_imgs/project_1/2.png",
        caption: "My old 308 Peugeot",
      },
      {
        src: "protfolio/project_imgs/project_1/3.png",
        caption: "Israeli train",
      },
      {
        src: "protfolio/project_imgs/project_1/4.png",
        caption: "Tel aviv street commuters",
      },
      {
        src: "protfolio/project_imgs/project_1/5.png",
        caption: "My brother's helicopter",
      },
    ],
    tags: ["Illustration", "Oil Color Sticks"],
    year: "2020",
    role: "Artist",
    tools: ["Oil Color Sticks", "Pencil", "Paper"],
  },
  {
    id: 2,
    type: "image",
    title: "Juno Calipso look alike",
    shortDescription: "Photography imitating Juno Calipso's work",
    description: `As part of a course assignment, I created a look alike of Juno Calipso's work, imitating her photographies. I photographed myself similarly to the way Juno Calipso poses in her works. These portraits seem as from another world, imagined fantasy of pink.`,
    mainImage: "portfolio/project_imgs/project_2/1.png",
    images: [
      {
        src: "portfolio/project_imgs/project_2/1.png",
      },
      {
        src: "portfolio/project_imgs/project_2/2.png",
      },
      {
        src: "portfolio/project_imgs/project_2/3.png",
      },
      {
        src: "portfolio/project_imgs/project_2/4.png",
      },
      {
        src: "portfolio/project_imgs/project_2/5.png",
      },
    ],
    tags: ["Photography", "Photo manipulation", "Photoshop", "Set creation"],
    year: "2020",
    role: "Artist",
    tools: ["Photoshop", "Photography"],
  },
  {
    id: 3,
    type: "video",
    title: "Dira Le'Haskir",
    shortDescription: "Suggested title sequence for an imaginary TV show",
    description: `
      As part of a course assignment, Mika bar lev and I created a suggested title sequence for an imaginary TV show.
      This is for the show "Dira Le'Haskir" based on the book by the same name.
      We used a phisical set with "collage" technique, green screen and our acting skills. This is a humorous take on the book.
    `,
    mainVideo: "https://youtu.be/t2V8LO4CMyY",
    thumbnailVideo: "portfolio/project_imgs/project_3/rent_dira_thumbnail.mp4",
    tags: ["Interactive", "Installation", "Physical Computing"],
    year: "2020",
    role: "Installation Artist & Developer",
    tools: ["Max/MSP", "Arduino", "Custom Hardware"],
  },
  {
    id: 4,
    type: "video",
    title: "Bazooka Moon",
    shortDescription: "suggested advertisment",
    description: `
      As part of a course assignment, I created a suggested advertisment for "Bazooka", the chewing gum that promises to take you to space.
      I used a storyboard to plan the video, and then filmed and edited it. Off course this is humorous approach to the product.
    `,
    mainVideo: "https://youtu.be/qGmnECY1fRs",
    thumbnailVideo:
      "portfolio/project_imgs/project_4/bazookaMoon_thumbnail.mp4",
    tags: ["Videography", "Video editing", "After Effects", "Story Board"],
    year: "2020",
    role: "Creator",
    tools: ["After Effects", "Photoshop", "Premiere Pro"],
  },
  {
    id: 5,
    type: "mixed",
    title: "Blue Moon",
    shortDescription: "Interactive book with animations",
    mainImage: "portfolio/project_imgs/project_5/IMG_3492.jpg",
    mainMedia: {
      type: "image",
      src: "portfolio/project_imgs/project_5/IMG_3492.jpg",
    },
    description: `
'Blue Moon' is an interactive book that explores inner conflict and emotions through illustration and an innovative format.
The book essentially serves as the joystick for the animations, which are an integral part of the experience. The text is taken from the song Blue Moon by Beck, with my personal interpretation. I wrote the content that defines the book, as well as designed and illustrated both the book and the animations "within" it.
The sound design for the project was created by Yair Cohen.
    `,
    media: [
      {
        type: "image",
        src: "portfolio/project_imgs/project_5/IMG_3492.jpg",
      },
      {
        type: "video",
        src: "https://youtu.be/asFyBphY5Ys",
        caption: "Amit reading the book",
      },
      {
        type: "image",
        src: "portfolio/project_imgs/project_5/IMG_3493.jpg",
      },
      {
        type: "video",
        src: "https://youtu.be/kraWsQ3QUOM",
        caption: "Animation loop from the book",
      },
      {
        type: "video",
        src: "https://youtu.be/i9ooz3kVWT8",
        caption: "Animation loop from the book",
      },
      {
        type: "video",
        src: "https://youtu.be/i9ooz3kVWT8",
        caption: "Animation loop from the book",
      },
    ],
    tags: ["Mixed Media", "Photography", "Frame by Frame Animation"],
    year: "2021",
    role: "Creator",
    tools: ["Camera", "Video Editing", "Photo Editing", "Procreate"],
  },
  {
    id: 6,
    type: "mixed",
    title: "Flat World",
    shortDescription: "Game created in a game jam course, with a team of 4",
    description: `
      Game created in a game jam course, with a team of 4.
      The game is a 3D platformer where the player controls the ship with his head and he needs to reach a destination without falling off the edge.
      The game was created in Unity game engine.
    `,
    hideFromLanding: true,
    mainMedia: {
      type: "video",
      src: "portfolio/project_imgs/project_6/1.MOV",
    },
    tags: ["Game", "Unity", "Game Jam"],
    year: "2020",
    role: "Unity Developer, Ideation collaborator",
    tools: ["Unity", "C#", "Game Design", "Game Development"],
    media: [
      {
        type: "video",
        src: "portfolio/project_imgs/project_6/1.MOV",
      },
      {
        type: "image",
        src: "portfolio/project_imgs/project_6/2.jpeg",
      },
      {
        type: "image",
        src: "portfolio/project_imgs/project_6/3.jpeg",
      },
      {
        type: "video",
        src: "portfolio/project_imgs/project_6/4.MOV",
      },
    ],
  },
  {
    id: 7,
    type: "video",
    title: "Corfu",
    shortDescription: "Vacation video",
    description: `
      A video I made from my vacation in Corfu.
    `,
    mainVideo: "https://youtu.be/HQlK7td12T4",
    thumbnailVideo: "portfolio/project_imgs/project_7/CorfuDraft_thumbnail.mp4",
    tags: ["Videography", "Video editing", "After Effects"],
    year: "2024",
    role: "Creator",
    hideFromLanding: true,
    isPortrait: true,
  },
];
