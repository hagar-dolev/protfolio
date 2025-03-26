import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project.type === "image") {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.type === "image") {
      setCurrentImageIndex(
        (prev) => (prev - 1 + project.images.length) % project.images.length
      );
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pt-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-6xl p-4 mx-4 my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white/10 backdrop-blur-md p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Media Section */}
          <div className="relative max-h-[65vh] flex items-center justify-center mb-8 overflow-hidden">
            {project.type === "image" ? (
              <>
                <img
                  src={project.images[currentImageIndex].src}
                  alt={project.images[currentImageIndex].caption}
                  className="max-w-full max-h-[65vh] w-auto h-auto object-contain"
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </button>
                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 text-sm">
                      {project.images[currentImageIndex].caption}
                    </p>
                  </>
                )}
              </>
            ) : (
              <video
                src={project.mainVideo}
                className="max-w-full max-h-[65vh] w-auto h-auto object-contain"
                controls
                autoPlay
                loop
                playsInline
              />
            )}
          </div>

          {/* Project Information */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              {project.title}
            </h2>
            <div className="prose prose-lg prose-invert mx-auto mb-8 text-left">
              {project.description.split("\n").map(
                (paragraph, index) =>
                  paragraph.trim() && (
                    <p key={index} className="text-white/90 mb-4">
                      {paragraph}
                    </p>
                  )
              )}
            </div>

            {/* Project Details */}
            <div className="border-t border-white/20 pt-6 mt-8 text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {project.tools && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-white/90">
                {project.year && (
                  <div>
                    <span className="font-semibold">Year:</span> {project.year}
                  </div>
                )}
                {project.role && (
                  <div>
                    <span className="font-semibold">Role:</span> {project.role}
                  </div>
                )}
              </div>

              {project.links && (
                <div className="mt-6 flex justify-center gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 hover:text-white transition-colors underline"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectModal;
