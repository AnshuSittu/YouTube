import React from "react";
import Imgmenu from "../img/Imgmenu.png";
import user from "../img/user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          src={Imgmenu}
          className="h-8 cursor-pointer"
          alt="Menu"
        ></img>
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            className="h-8 ml-3"
            alt="Logo"
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-40">
        <input
          className="border border-gray-400 rounded-l-full w-1/2 p-1"
          type="text"
        />
        <button className="border border-gray-400 rounded-r-full px-2 bg-gray-200 p-1">
          {" "}
          🔍{" "}
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" src={user} alt="user" />
      </div>
    </div>
  );
};

export default Head;
