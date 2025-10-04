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

const Sidebar = ({ sidebar }) => {
  return (
    <div
      className={`flex flex-col gap-4 p-4 bg-white shadow-md h-screen transition-all duration-300 ${
        sidebar ? 'w-64' : 'w-20'
      }`}
    >
      {/* Shortcut links */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded">
          <img src={home} alt="Home" className="w-5 h-5" />
          {sidebar && <p>Home</p>}
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded">
          <img src={game_icon} alt="Gaming" className="w-5 h-5" />
          {sidebar && <p>Gaming</p>}
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded">
          <img src={automobiles} alt="Automobiles" className="w-5 h-5" />
          {sidebar && <p>Automobiles</p>}
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded">
          <img src={sport} alt="Sport" className="w-5 h-5" />
          {sidebar && <p>Sport</p>}
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded">
          <img src={entertainment} alt="Entertainment" className="w-5 h-5" />
          {sidebar && <p>Entertainment</p>}
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded">
          <img src={tech} alt="Technology" className="w-5 h-5" />
          {sidebar && <p>Technology</p>}
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded">
          <img src={music} alt="Music" className="w-5 h-5" />
          {sidebar && <p>Music</p>}
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded">
          <img src={blogs} alt="Blog" className="w-5 h-5" />
          {sidebar && <p>Blog</p>}
        </div>

        <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded">
          <img src={news} alt="News" className="w-5 h-5" />
          {sidebar && <p>News</p>}
        </div>
      </div>

      <hr className="my-2 border-gray-300" />

      {/* Subscribed List */}
      {sidebar && (
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
      )}
    </div>
  );
};

export default Sidebar;
