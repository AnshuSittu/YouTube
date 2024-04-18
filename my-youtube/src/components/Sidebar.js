import React from "react";
import { useSelector } from "react-redux";


const Sidebar = () => {
  const isMenuOPen = useSelector(store => store.app.isMenuOPen); // subscribing

  //early return pattern 
  
  if(!isMenuOPen) return null ;

  return (
    <div className="p-5 shadow-lg w-48">
     <ul>
        <li className="m-2">Home </li>
        <li className="m-2">Shorts </li>
        <li className="m-2">Videos</li>
        <li className="m-2">Live</li>
      </ul>

      <h1 className="font-bold pt-5"> Subscriptions</h1>
      <ul >
        <li className="m-2">Music </li>
        <li className="m-2">Sports </li>
        <li className="m-2">Gaming </li>
        <li className="m-2">Movies </li>
      </ul>
      <h1 className="font-bold pt-5"> WatchList</h1>
      <ul>
        <li className="my-2">History   </li>
        <li className="my-2">Playlist   </li>
        <li className="my-2">Watch Later </li>
        <li className="my-2">Liked Videos  </li>
      </ul>
    </div>
  );
};

export default Sidebar;
