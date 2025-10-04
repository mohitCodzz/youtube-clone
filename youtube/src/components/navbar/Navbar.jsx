import React from "react";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notifications_icon from "../../assets/notification.png";
import user_icon from "../../assets/jack.png";

const Navbar = (setSidebar) => {
  return (
    <nav className="flex justify-between items-center px-4 py-6 shadow-md sticky top-0 bg-white z-50">
      {/* Left div */}
      <div className="flex items-center gap-4">
        <img src={menu_icon} alt="menu" className="w-6 h-6 cursor-pointer" />
        <img src={logo} alt="logo" className="h-8 sm:h-10 md:h-12 cursor-pointer object-contain" />
      </div>

      {/* Search area */}
      <div className="flex items-center w-1/2 max-w-xl">
        {/* Input */}
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 rounded-l-full px-4 py-1 focus:outline-none focus:border-gray-400 text-sm h-10"
        />

        {/* Search button with icon */}
        <button className="bg-gray-100 border border-gray-300 rounded-r-full px-4 hover:bg-gray-200 h-10 flex items-center justify-center cursor-pointer">
          <img src={search_icon} alt="Search" className="w-4 h-4" />
        </button>
      </div>

      {/* Right div */}
      <div className="flex gap-5 justify-between">
        <img src={upload_icon} alt="upload" className="w-6 h-6 cursor-pointer"/>
        <img src={more_icon} alt="more"className="w-6 h-6 cursor-pointer" />
        <img src={notifications_icon} alt="notification" className="w-8 h-8 rounded-full cursor-pointer" />
        <img src={user_icon} alt="user" className="w-10 h-10 rounded-full cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
