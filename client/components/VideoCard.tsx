import React from 'react';

interface VideoCardProps {
  title: string;
  description: string;
  youtubeUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, description, youtubeUrl }) => {
  const videoId = youtubeUrl.split('v=')[1];

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard; 