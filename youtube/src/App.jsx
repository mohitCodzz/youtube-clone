import React from "react";
import Navbar from "./components/navbar/Navbar"; 
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/home/Home"; 
import Video from "./pages/video/Video"; 

const App = () => {

  const [sidebar, setSidebar] = React.useState(true);
  return (
    <div>
      <Navbar sidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
