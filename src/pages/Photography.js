import React, { useState } from "react";
import { motion } from "framer-motion";
import { getAssetPath } from "../utils/paths";

const photographs = [
  {
    id: 1,
    src: "photography/000131920062.jpg",
  },
  {
    id: 2,
    src: "photography/000131920047.jpg",
  },
  {
    id: 3,
    src: "photography/000131920046.jpg",
  },
  {
    id: 4,
    src: "photography/000131920033.jpg",
  },
  {
    id: 5,
    src: "photography/000131920016.jpg",
  },
  {
    id: 6,
    src: "photography/IMG_7830.jpg",
  },
  {
    id: 7,
    src: "photography/F1000022.jpg",
  },
  {
    id: 8,
    src: "photography/F1000021.jpg",
  },
  {
    id: 9,
    src: "photography/F1000016.jpg",
  },
  {
    id: 10,
    src: "photography/97480015.jpg",
  },
  {
    id: 11,
    src: "photography/000017.jpg",
  },
  {
    id: 12,
    src: "photography/000027.jpg",
  },
  {
    id: 13,
    src: "photography/000013.jpg",
  },
  {
    id: 14,
    src: "photography/IMG_8476.jpg",
  },
  {
    id: 15,
    src: "photography/IMG_6723.jpg",
  },
  {
    id: 16,
    src: "photography/14_yarden_n_hagar.jpg",
  },
  {
    id: 17,
    src: "photography/21_yarden_n_hagar.jpg",
  },
  {
    id: 18,
    src: "photography/DSC04292.jpg",
  }
];

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent right click
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  // Prevent drag
  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900"
      onContextMenu={handleContextMenu}
    >
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Photography
          </h1>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photographs.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(photo)}
            >
              <img
                src={getAssetPath(photo.src)}
                alt=""
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                onDragStart={handleDragStart}
                style={{
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                  userSelect: "none",
                }}
              />
              <div className="absolute inset-0 pointer-events-none select-none">
                <div className="w-full h-full flex items-center justify-center opacity-0">
                  © Hagar Dolev
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
            onContextMenu={handleContextMenu}
          >
            <div
              className="relative max-w-7xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getAssetPath(selectedImage.src)}
                alt=""
                className="max-h-[90vh] w-auto pointer-events-none select-none"
                onDragStart={handleDragStart}
                style={{
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                  userSelect: "none",
                }}
              />
              <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute bottom-4 right-4 text-white/50 text-sm font-press-start">
                  © {new Date().getFullYear()} Hagar Dolev
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Photography;
