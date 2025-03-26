import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";

const ProjectCard = ({ project, onClick, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative group overflow-hidden shadow-lg cursor-pointer ${className}`}
      onClick={onClick}
    >
      {project.type === "image" ? (
        <img
          src={project.images[0].src}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <video
          src={project.mainVideo}
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
          <p className="text-white/90">{project.shortDescription}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section with About Overlay */}
      <section className="relative h-screen">
        {/* Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-neutral-900/70 backdrop-blur-sm z-10" />
          <div className="grid grid-cols-3 grid-rows-2 gap-1 h-full">
            {projects.slice(0, 6).map((project, index) => (
              <div key={index} className="relative overflow-hidden">
                {project.type === "image" ? (
                  <img
                    src={project.images[0].src}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={project.mainVideo}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    autoPlay
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* About Content */}
        <div className="relative z-20 h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Hagar Dolev
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              A creative technologist and artist exploring the intersection of
              art, technology, and interactive experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Interactive Art",
                  description:
                    "Creating immersive digital experiences that blend technology with artistic expression.",
                },
                {
                  title: "Creative Technology",
                  description:
                    "Developing innovative solutions using cutting-edge tools and frameworks.",
                },
                {
                  title: "Digital Design",
                  description:
                    "Crafting visually stunning and emotionally engaging digital artworks.",
                },
              ].map((skill) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {skill.title}
                  </h3>
                  <p className="text-white/80">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A selection of my recent projects spanning interactive
              installations, animations, and digital experiences.
            </p>
          </motion.div>

          {/* Gallery Wall Grid */}
          <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                className={
                  index % 5 === 0 || index % 5 === 3
                    ? "col-span-8 row-span-2"
                    : "col-span-4 row-span-1"
                }
              />
            ))}
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
