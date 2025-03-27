import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";

const TypewriterText = ({ text }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="inline-block"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: index * 0.03,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const ProjectShowcase = ({ project, isActive }) => {
  const getMainMedia = (project) => {
    if (project.type === "mixed") {
      return project.mainMedia || { type: "image", src: project.mainImage };
    }
    return {
      type: project.type,
      src:
        project.type === "image"
          ? project.mainImage || project.images[0].src
          : project.mainVideo,
    };
  };

  const media = getMainMedia(project);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full"
    >
      {media.type === "image" ? (
        <img
          src={media.src}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          src={media.src}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            {project.title}
          </h2>
          <p className="text-white/90 text-lg max-w-2xl">
            {project.shortDescription}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Filter out projects that should be hidden from landing
  const showcaseProjects = projects.filter(
    (project) => !project.hideFromLanding
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProjectIndex(
        (current) => (current + 1) % showcaseProjects.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [showcaseProjects.length]);

  const aboutText = [
    "A creative technologist and artist exploring the intersection of art, technology, and interactive experiences.",
  ];

  // Helper function to determine grid span based on position and content
  const getGridSpan = (index, totalProjects) => {
    const position = index % 6;

    switch (position) {
      case 0:
        return "col-span-8 row-span-2";
      case 1:
        return "col-span-4 row-span-1";
      case 2:
        return "col-span-4 row-span-1";
      case 3:
        return "col-span-6 row-span-2";
      case 4:
        return "col-span-6 row-span-1";
      case 5:
        return "col-span-6 row-span-1";
      default:
        return "col-span-4 row-span-1";
    }
  };

  const getMainMedia = (project) => {
    if (project.type === "mixed") {
      return project.mainMedia || { type: "image", src: project.mainImage };
    }
    return {
      type: project.type,
      src:
        project.type === "image"
          ? project.mainImage || project.images[0].src
          : project.mainVideo,
    };
  };

  return (
    <div className="min-h-screen">
      {/* Cinematic Project Showcase */}
      <section className="relative h-screen">
        <div className="relative h-full overflow-hidden">
          {showcaseProjects.map((project, index) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              isActive={index === activeProjectIndex}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            {aboutText.map((paragraph, index) => (
              <p
                key={index}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
              >
                <TypewriterText text={paragraph} />
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-0 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Wall Grid */}
          <div className="grid grid-cols-12 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {projects.map((project, index) => {
              const media = getMainMedia(project);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative group overflow-hidden cursor-pointer ${getGridSpan(
                    index,
                    projects.length
                  )}`}
                  onClick={() => setSelectedProject(project)}
                >
                  {media.type === "image" ? (
                    <img
                      src={media.src}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <video
                      src={media.src}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      loop
                      muted
                      playsInline
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/90 line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
