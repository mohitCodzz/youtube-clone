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
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

const Sidebar = () => {
  return (
    <div className="p-4 w-64">
      {/* Shortcut links */}
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
        <img src={news} alt="Blog" className="w-5 h-5" />
        <p>News</p>
      </div>

      <hr className="my-2" />
    </div>
  );
};

export default Sidebar;