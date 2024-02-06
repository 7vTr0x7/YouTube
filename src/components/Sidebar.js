import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-xl w-48">
    
      <h1 className="font-bold">Home</h1>
      <h1 className="font-bold">Shorts</h1>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
