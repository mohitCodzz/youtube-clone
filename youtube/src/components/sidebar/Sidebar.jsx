import React from 'react';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sport from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

const Sidebar = () => {
  return (
    <div className="p-4 w-64 flex flex-col gap-4">
      {/* Shortcut links */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 py-2 cursor-pointer">
          <img src={home} alt="Home" className="w-5 h-5" />
          <p>Home</p>
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer">
          <img src={game_icon} alt="Gaming" className="w-5 h-5" />
          <p>Gaming</p>
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer">
          <img src={automobiles} alt="Automobiles" className="w-5 h-5" />
          <p>Automobiles</p>
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer">
          <img src={sport} alt="Sport" className="w-5 h-5" />
          <p>Sport</p>
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer">
          <img src={entertainment} alt="Entertainment" className="w-5 h-5" />
          <p>Entertainment</p>
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer">
          <img src={tech} alt="Technology" className="w-5 h-5" />
          <p>Technology</p>
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer">
          <img src={music} alt="Music" className="w-5 h-5" />
          <p>Music</p>
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer">
          <img src={blogs} alt="Blog" className="w-5 h-5" />
          <p>Blog</p>
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer">
          <img src={news} alt="News" className="w-5 h-5" />
          <p>News</p>
        </div>
      </div>

      <hr className="my-2 border-gray-300" />

      {/* Subscribed List */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Subscribed</h3>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
            <img src={simon} alt="Leonardo" className="w-8 h-8 rounded-full object-cover" />
            <p className="text-sm font-medium">Leonardo</p>
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
            <img src={tom} alt="Tom" className="w-8 h-8 rounded-full object-cover" />
            <p className="text-sm font-medium">Tom</p>
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
            <img src={megan} alt="Lisa" className="w-8 h-8 rounded-full object-cover" />
            <p className="text-sm font-medium">Lisa</p>
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
            <img src={cameron} alt="Merry" className="w-8 h-8 rounded-full object-cover" />
            <p className="text-sm font-medium">Merry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
