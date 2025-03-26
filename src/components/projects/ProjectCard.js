import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg"
    >
      <Link to={`/work/${project.id}`}>
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay with old image filter effect */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {project.subtitle}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {project.year} • {project.location}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
