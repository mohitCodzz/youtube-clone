import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';

const Home = ({ sidebar }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar sidebar={sidebar} />

      {/* Feed area */}
      <div className="flex-1 p-4">
        <Feed />
      </div>
    </div>
  );
};

export default Home;
