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
    mainImage: "portfolio/project_imgs/project_1/1.png",
    images: [
      {
        src: "portfolio/project_imgs/project_1/1.png",
        caption: "Eged Buses",
      },
      {
        src: "portfolio/project_imgs/project_1/2.png",
        caption: "My old 308 Peugeot",
      },
      {
        src: "portfolio/project_imgs/project_1/3.png",
        caption: "Israeli train",
      },
      {
        src: "portfolio/project_imgs/project_1/4.png",
        caption: "Tel aviv street commuters",
      },
      {
        src: "portfolio/project_imgs/project_1/5.png",
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
  {
    id: 8,
    type: "mixed",
    title: "Hachaverim Shel Natasha",
    shortDescription: "Band logo and album cover design",
    description: `
      I designed the logo and the album cover for the band "Hachaverim Shel Natasha", as part of a course assignment in bezalel.
      The logo is inspired by one of the band member, Mika, who had a rough childhood which he decribed often.
      I tried to convey the feeling of the lyrics, and the story of the band through the design.
    `,
    mainImage: "portfolio/project_imgs/project_8/1.png",
    mainMedia: {
      type: "video",
      src: "portfolio/project_imgs/project_8/single_promo.mp4",
    },
    media: [
      {
        type: "video",
        src: "portfolio/project_imgs/project_8/single_promo.mp4",
        caption: "A suggested song promo video",
      },
      {
        type: "svg",
        src: "portfolio/project_imgs/project_8/Asset 5.svg",
        caption: "The logo I designed for the band",
        svgClassName: "max-w-[100px] mx-auto h-[150px] pt-8",
      },
      {
        type: "image",
        src: "portfolio/project_imgs/project_8/show_poster.jpg",
        caption: "A suggested poster for a show the band plays",
      },
      {
        type: "image",
        src: "portfolio/project_imgs/project_8/full_branding_view.jpg",
        caption: "Full view on all suggested branding",
      },
    ],
  },
  {
    id: 9,
    type: "image",
    title: "Recipe illustration",
    shortDescription: "Recipe illustration",
    description: `
      An illustration to accompany a recipe for tea. Made in a course with Michel Kichka.
    `,
    mainImage: "portfolio/project_imgs/project_9/Hagar_Dolev_Recipe_2.jpg",
    images: [
      {
        type: "image",
        src: "portfolio/project_imgs/project_9/Hagar_Dolev_Recipe_2.jpg",
        caption: "Illudtrated with procreate on Ipad",
      },
    ],
    tags: ["Illustration", "Promarker"],
    year: "2020",
    tools: ["Procreate", "Ipad"],
    hideFromLanding: true,
  },
  {
    id: 10,
    type: "image",
    title: "Packaging design",
    shortDescription:
      "I designed a sustainable packaging for a suggested farm shop",
    description: `
      I designed a sustainable packaging for a suggested farm shop.
      The packaging is designed with banana leaves and paper in the aim to be as sustainable as possible.
      It was inspired by the far east culture where the leaves are used even for cooking.
    `,
    mainImage: "portfolio/project_imgs/project_10/הכל_מונח_מבולגן.jpg",
    tags: ["Packaging design", "Illustration"],
    year: "2020",
    images: [
      {
        type: "image",
        caption: "Eggs packaging",
        src: "portfolio/project_imgs/project_10/ביצים_מלמעלה.jpg",
      },
      {
        type: "image",
        caption: "The main packaging design",
        src: "portfolio/project_imgs/project_10/הכל_מונח_מבולגן.jpg",
      },
      {
        type: "image",
        caption: "Dates packaging",
        src: "portfolio/project_imgs/project_10/תמרים.jpg",
      },
    ],
    hideFromLanding: true,
  },
  {
    id: 11,
    type: "image",
    title: "Sketches",
    shortDescription: "Variouse sketches",
    description: `
      Skeching is thinking as one of my teachers said.
    `,
    mainImage: "portfolio/project_imgs/project_11/7.jpg",
    tags: ["Sketching", "Illustration"],
    year: "mixed",
    images: [
      {
        type: "image",
        src: "portfolio/project_imgs/project_11/1.jpg",
      },
      {
        type: "image",
        src: "portfolio/project_imgs/project_11/2.jpg",
      },
      {
        type: "image",
        src: "portfolio/project_imgs/project_11/3.jpg",
      },
      {
        type: "image",
        src: "portfolio/project_imgs/project_11/4.jpg",
      },
      {
        type: "image",
        src: "portfolio/project_imgs/project_11/5.jpg",
      },
      {
        type: "image",
        src: "portfolio/project_imgs/project_11/6.jpg",
      },
      {
        type: "image",
        src: "portfolio/project_imgs/project_11/8.jpg",
      },
    ],
    // hideFromLanding: true,
  },
];
