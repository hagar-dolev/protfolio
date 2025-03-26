export const skills = ["React", "MongoDB"];

// Project categories
export const categories = {
  FILM_PHOTOGRAPHY: "film-photography",
  DIGITAL_PHOTOGRAPHY: "digital-photography",
  VIDEOGRAPHY: "videography",
  GRAPHIC_DESIGN: "graphic-design",
  INTERACTIVE: "interactive",
  INTERIOR_DESIGN: "interior-design",
  BEZALEL: "bezalel",
};

// Project class for better encapsulation and type safety
export class Project {
  constructor({
    id,
    title,
    subtitle,
    description,
    image,
    link,
    additionalImages,
    tags,
    category,
    featured = false,
    date,
    location,
    client,
    year,
  }) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.image = image;
    this.link = link;
    this.additionalImages = additionalImages;
    this.tags = tags;
    this.category = category;
    this.featured = featured;
    this.date = date;
    this.location = location;
    this.client = client;
    this.year = year;
  }

  // Helper methods
  isInCategory(category) {
    return this.category === category;
  }

  hasTag(tag) {
    return this.tags.includes(tag);
  }
}

// Sample projects data
export const projects = [
  new Project({
    id: "transport-cards",
    title: "Transport Cards",
    subtitle: "Illustration of new set of cards",
    description:
      "New set of cards, cards of transportaion tools, done during Illustration course, guided by Rutu Modan",
    image: "./project_imgs/project_1/1.png",
    link: "",
    additionalImages: "./project_imgs/project_1",
    tags: [
      "illustration",
      "game",
      "unity",
      "animation",
      "photography",
      "video",
      "coding",
      "typography",
    ],
    category: categories.INTERACTIVE,
    featured: true,
    date: "2022",
    location: "Bezalel Academy",
    client: "Course Project",
    year: 2022,
  }),
  // Add more projects here...
];

// CV data
export const cvData = {
  downloadUrl: "/path-to-cv.pdf",
  lastUpdated: "2024-02-20",
  sections: [
    {
      title: "Education",
      items: [
        {
          institution: "Bezalel Academy",
          degree: "BFA in Visual Communication",
          year: "2018-2022",
        },
      ],
    },
    // Add more sections...
  ],
};

// Blog posts structure (for future use)
export class BlogPost {
  constructor({ id, title, excerpt, content, date, tags, image, author }) {
    this.id = id;
    this.title = title;
    this.excerpt = excerpt;
    this.content = content;
    this.date = date;
    this.tags = tags;
    this.image = image;
    this.author = author;
  }
}

// Research papers structure (for future use)
export class ResearchPaper {
  constructor({
    id,
    title,
    abstract,
    authors,
    publicationDate,
    journal,
    link,
    keywords,
  }) {
    this.id = id;
    this.title = title;
    this.abstract = abstract;
    this.authors = authors;
    this.publicationDate = publicationDate;
    this.journal = journal;
    this.link = link;
    this.keywords = keywords;
  }
}
