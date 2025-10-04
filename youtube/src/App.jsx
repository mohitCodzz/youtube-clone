import React from "react";
import Navbar from "./components/navbar/Navbar"; // Navbar component
import { Routes, Route } from "react-router-dom"; // ✅ you must import Route as well
import Home from "./pages/home/Home"; // ✅ import your Home component
import Video from "./pages/video/Video"; // ✅ import your Video component

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
