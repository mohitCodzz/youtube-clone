import React from 'react';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';

const Feed = () => {
  // Array of video data
  const videos = [
    { thumbnail: thumbnail1, title: "Most amazing view of the nature!", channel: "NatureExpo", views: "20M views", time: "1 day ago" },
    { thumbnail: thumbnail2, title: "Incredible wildlife captured!", channel: "WildLifeTV", views: "10M views", time: "3 days ago" },
    { thumbnail: thumbnail3, title: "Tech gadgets you must try", channel: "TechWorld", views: "5M views", time: "2 days ago" },
    { thumbnail: thumbnail4, title: "Top 10 football goals", channel: "SportsHub", views: "12M views", time: "1 day ago" },
    { thumbnail: thumbnail5, title: "Delicious recipes to try", channel: "Foodies", views: "8M views", time: "4 days ago" },
    { thumbnail: thumbnail6, title: "Amazing travel destinations", channel: "TravelGuide", views: "15M views", time: "3 days ago" },
    { thumbnail: thumbnail7, title: "Mind-blowing science experiments", channel: "ScienceLab", views: "7M views", time: "5 days ago" },
    { thumbnail: thumbnail8, title: "Relaxing music for work", channel: "MusicVibes", views: "25M views", time: "1 week ago" },
  ];

  return (
    <div className="p-4">
      {/* Feed Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition-transform">
            {/* Video Card */}
            <img src={video.thumbnail} alt={`thumbnail${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-sm font-semibold">{video.title}</h2>
            <h3 className="text-xs text-gray-500">{video.channel}</h3>
            <p className="text-xs text-gray-500">{video.views} &bull; {video.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
