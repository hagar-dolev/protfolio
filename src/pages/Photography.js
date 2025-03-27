import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// This will be your photography data
const photographs = [
  // You'll add your photos here with compressed versions
  // Example structure:
  // {
  //   id: 1,
  //   title: "Photo Title",
  //   description: "Photo description",
  //   thumbnail: "/path/to/compressed/image.jpg",
  //   category: "nature" // or any other category
  // }
];

const Photography = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["all", "nature", "urban", "abstract", "portraits"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white dark:bg-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Photography
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A collection of moments captured through my lens
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                  : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photographs
            .filter(
              (photo) =>
                selectedCategory === "all" ||
                photo.category === selectedCategory
            )
            .map((photo) => (
              <motion.div
                key={photo.id}
                layoutId={`photo-${photo.id}`}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(photo)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={photo.thumbnail}
                    alt={photo.title}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Watermark */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-lg font-semibold">
                        {photo.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none select-none">
                    <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-30">
                      <span className="text-white text-xl transform -rotate-45 font-light">
                        © Hagar Dolev
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                layoutId={`photo-${selectedImage.id}`}
                className="relative max-w-5xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.thumbnail}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 pointer-events-none select-none">
                  <div className="w-full h-full flex items-center justify-center opacity-30">
                    <span className="text-white text-3xl transform -rotate-45 font-light">
                      © Hagar Dolev
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white text-2xl"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Photography;
