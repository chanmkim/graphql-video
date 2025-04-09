import React from 'react';
import { gql, useQuery } from '@apollo/client';
import VideoCard from '../components/VideoCard';

const GET_VIDEOS = gql`
  query GetVideos {
    videos {
      id
      title
      description
      youtubeUrl
    }
  }
`;

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_VIDEOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Video Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.videos.map((video: any) => (
            <VideoCard
              key={video.id}
              title={video.title}
              description={video.description}
              youtubeUrl={video.youtubeUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 