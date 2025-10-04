import React from "react";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notifications_icon from "../../assets/notification.png";
import user_icon from "../../assets/jack.png";

const Navbar = () => {
  return (
    <nav className="flex jsutify-between items-center px-4 py-8 shadow-md sticky top-0 bg-white z-50">
        {/* Left div */}
      <div className="flex items-center gap-4"> 
        <img src={menu_icon} alt="menu" className="w-6 h-6 cursor-pointer"/>
        <img src={logo} alt="logo"className="h-6 cursor-pointer" />
      </div>

      {/* Search area */}
      <div>
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="" />
      </div>

      {/* Right div */}
      <div>
        <img src={upload_icon} alt="upload" />
        <img src={more_icon} alt="more" />
        <img src={notifications_icon} alt="notification" />
        <img src={user_icon} alt="user" />
      </div>
    </nav>
  );
};

export default Navbar;
