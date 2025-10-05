import React from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link for navigation
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import thumbnail9 from '../../assets/thumbnail9.png';
import thumbnail10 from '../../assets/thumbnail10.png';

const Feed = () => {
  // Array of video data
  const videos = [
    { thumbnail: thumbnail10, title: "Night Sky from ISRO HQ 🚀", channel: "ISRO", views: "100M views", time: "1 day ago", videoId: "video10" },
    { thumbnail: thumbnail9, title: "SpaceX rocket launch 🚀", channel: "SpaceX", views: "100M views", time: "1 day ago", videoId: "video9" },
    { thumbnail: thumbnail1, title: "Most amazing view of the nature!", channel: "NatureXpo", views: "25M views", time: "1 week ago", videoId: "video1" },
    { thumbnail: thumbnail2, title: "USA 🇺🇸 !", channel: "WildLifeTV", views: "10M views", time: "3 days ago", videoId: "video2" },
    { thumbnail: thumbnail3, title: "A day in New York", channel: "TravelwithRiya", views: "5M views", time: "2 days ago", videoId: "video3" },
    { thumbnail: thumbnail4, title: "Top 10 travel destinations", channel: "TravelWithYash", views: "12M views", time: "1 day ago", videoId: "video4" },
    { thumbnail: thumbnail5, title: "Day out with friends", channel: "Guyzz", views: "8M views", time: "4 days ago", videoId: "video5" },
    { thumbnail: thumbnail6, title: "Lambo Unboxing 🎁", channel: "CarGuy", views: "15M views", time: "3 days ago", videoId: "video6" },
    { thumbnail: thumbnail7, title: "SpaceX headquarter tour", channel: "Markvlogs", views: "7M views", time: "5 days ago", videoId: "video7" },
    { thumbnail: thumbnail8, title: "Racing with Lambo 🏁", channel: "CarGuy", views: "25M views", time: "1 week ago", videoId: "video8" },
  
  ];
    

  return (
    <div className="p-4">
      {/* Feed Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <Link to={`/video/${video.videoId}`} key={index}>
            <div className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition-transform">
              {/* Video Card */}
              <img
                src={video.thumbnail}
                alt={`thumbnail${index + 1}`}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-sm font-semibold">{video.title}</h2>
              <h3 className="text-xs text-gray-500">{video.channel}</h3>
              <p className="text-xs text-gray-500">{video.views} &bull; {video.time}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Feed;
