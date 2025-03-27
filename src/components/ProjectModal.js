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
  if (!media || !media.src) {
    return null;
  }

  if (media.type === "video") {
    // Check if it's a YouTube URL
    if (media.src.includes("youtube.com") || media.src.includes("youtu.be")) {
      const videoId = getYouTubeId(media.src);
      if (!videoId) return null;

      return (
        <div className={`${className} relative w-full aspect-video`}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
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

  if (media.type === "svg") {
    return (
      <div
        className={`${className} w-full h-full flex items-center justify-center`}
      >
        <div
          className={`w-full max-w-[600px] h-auto ${media.svgClassName || ""}`}
        >
          <img
            src={getAssetPath(media.src)}
            alt={media.caption}
            className="w-full h-full object-contain dark:invert"
          />
        </div>
      </div>
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
      ? project.media || []
      : project.type === "image"
      ? (project.images || []).map((img) => ({ type: "image", ...img }))
      : project.mainVideo
      ? [
          {
            type: "video",
            src: project.mainVideo,
            isPortrait: project.isPortrait,
          },
        ]
      : [];

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  }, [mediaItems.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  }, [mediaItems.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, handleNext, handlePrevious]);

  const currentMedia = mediaItems[currentIndex];
  const hasMultipleMedia = mediaItems.length > 1;

  // If there's no media, don't render the modal
  if (!currentMedia) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>

        {/* Main Content Container */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Media Section - 2/3 width on desktop, full width on mobile */}
          <div className="w-full md:w-2/3 relative">
            {/* Navigation buttons - only show if there are multiple media items */}
            {hasMultipleMedia && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50"
                >
                  <ChevronLeftIcon className="h-8 w-8" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50"
                >
                  <ChevronRightIcon className="h-8 w-8" />
                </button>
              </>
            )}

            {/* Media display */}
            <div className="w-full aspect-video md:aspect-[16/9] flex items-center justify-center bg-black/20 rounded-lg overflow-hidden">
              <MediaDisplay media={currentMedia} className="w-full h-full" />
            </div>

            {/* Media Caption */}
            {currentMedia?.caption && (
              <div className="text-center mt-4">
                <p className="text-white/80 text-sm italic">
                  {currentMedia.caption}
                </p>
              </div>
            )}
          </div>

          {/* Text Section - 1/3 width on desktop, full width on mobile */}
          <div className="w-full md:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold text-white text-center md:text-left">
              {project.title}
            </h2>

            <div className="space-y-4">
              {project.description.split("\n").map(
                (paragraph, index) =>
                  paragraph.trim() && (
                    <p
                      key={index}
                      className="text-white/90 text-left leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  )
              )}
            </div>

            {/* Project Details */}
            <div className="border-t border-white/20 pt-6">
              <div className="flex flex-wrap gap-2 mb-4">
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
                <div className="mt-4 flex gap-4">
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
