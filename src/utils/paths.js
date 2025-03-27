// Helper function to get the correct asset path based on environment
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // In development, use paths relative to public folder
  if (process.env.NODE_ENV === "development") {
    return cleanPath.replace("portfolio/", "");
  }

  // In production (GitHub Pages), use absolute paths with /portfolio prefix
  return `/portfolio/${cleanPath.replace("portfolio/", "")}`;
};
