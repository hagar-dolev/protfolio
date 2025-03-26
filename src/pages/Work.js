import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectGrid from "../components/projects/ProjectGrid";
import ProjectFilter from "../components/projects/ProjectFilter";
import { projects } from "../data";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Work
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A collection of my artistic projects and creative endeavors
          </p>
        </div>

        <ProjectFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ProjectGrid projects={projects} selectedCategory={selectedCategory} />
      </div>
    </motion.div>
  );
};

export default Work;
