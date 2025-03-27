import React, { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { getAssetPath } from "../utils/paths";

// Helper function to get YouTube video ID
const getYouTubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const MediaDisplay = ({ media, className }) => {
  if (media.type === "video") {
    // Check if it's a YouTube URL
    if (media.src.includes("youtube.com") || media.src.includes("youtu.be")) {
      const videoId = getYouTubeId(media.src);
      return (
        <div className={`${className} relative w-full aspect-video`}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    // Local video file
    return (
      <video
        src={getAssetPath(media.src)}
        className={`${className} ${
          media.isPortrait
            ? "max-h-[90vh] w-auto mx-auto"
            : "w-full h-full object-contain"
        }`}
        controls
        autoPlay
        loop
        playsInline
      />
    );
  }
  return (
    <img
      src={getAssetPath(media.src)}
      alt={media.caption}
      className={`${className} object-contain`}
    />
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const mediaItems =
    project.type === "mixed"
      ? project.media
      : project.type === "image"
      ? project.images.map((img) => ({ type: "image", ...img }))
      : [
          {
            type: "video",
            src: project.mainVideo,
            isPortrait: project.isPortrait,
          },
        ];

  const nextMedia = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  }, [mediaItems.length]);

  const prevMedia = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
    );
  }, [mediaItems.length]);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextMedia();
      if (e.key === "ArrowLeft") prevMedia();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, nextMedia, prevMedia]);

  const currentMedia = mediaItems[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center"
      onClick={onClose}
    >
      {/* Dark overlay with blur effect */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-md" />

      <div
        className="relative w-full max-w-6xl p-4 mx-4 my-4 overflow-y-auto max-h-screen"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Media Section */}
          <div className="relative max-h-[70vh] flex items-center justify-center">
            <MediaDisplay
              media={currentMedia}
              className="max-w-full max-h-[70vh] w-auto h-auto"
            />

            {mediaItems.length > 1 && (
              <>
                <button
                  onClick={prevMedia}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-colors"
                  aria-label="Previous media"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={nextMedia}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-colors"
                  aria-label="Next media"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          {/* Media Caption */}
          {currentMedia.caption && (
            <div className="text-center pt-2">
              <p className="text-white/90 text-sm">{currentMedia.caption}</p>
            </div>
          )}

          {/* Project Information */}
          <div className="pt-3">
            <h2 className="text-3xl font-bold text-white mb-3 text-center">
              {project.title}
            </h2>
            <div className="max-w-2xl mx-auto">
              {project.description.split("\n").map(
                (paragraph, index) =>
                  paragraph.trim() && (
                    <p
                      key={index}
                      className="text-white/90 mb-2 text-left leading-snug"
                    >
                      {paragraph}
                    </p>
                  )
              )}
            </div>

            {/* Project Details */}
            <div className="border-t border-white/20 pt-3 mt-3 max-w-2xl mx-auto">
              <div className="flex flex-wrap justify-start gap-2 mb-3">
                {project.tools && (
                  <div className="flex flex-wrap gap-2">
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

              <div className="flex flex-wrap gap-4 text-white/90">
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
                <div className="mt-3 flex gap-4">
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
