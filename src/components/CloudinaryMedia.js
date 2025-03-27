import React from "react";
import { Image, Video } from "cloudinary-react";

const CloudinaryMedia = ({
  publicId,
  type = "image",
  className = "",
  alt = "",
}) => {
  if (type === "video") {
    return (
      <Video
        cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
        publicId={publicId}
        className={className}
        controls
        width="100%"
        height="auto"
      >
        <source type="video/mp4" codecs="avc1.4D401E, mp4a.40.2" />
        <source type="video/webm" codecs="vp8, vorbis" />
        <source type="video/ogg" codecs="theora, vorbis" />
      </Video>
    );
  }

  return (
    <Image
      cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
      publicId={publicId}
      className={className}
      alt={alt}
      width="auto"
      crop="scale"
      loading="lazy"
    />
  );
};

export default CloudinaryMedia;
