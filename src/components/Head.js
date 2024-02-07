import React from "react";
import menu from "../utils/images/menu.png";
import logo from "../utils/images/logo.png";
import userIcon from "../utils/images/user.png";
import searchIcon from "../utils/images/search.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  console.log(`${process.env.REACT_APP_V}`);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-xl">
      <div className="flex col-span-1 ">
        <img
          alt="menu"
          onClick={() => toggleHandler()}
          src={menu}
          className="h-8 cursor-pointer"
        />
        <a href="/">
          <img alt="logo" src={logo} className="h-8 ml-5" />
        </a>
      </div>
      <div className="col-span-10 flex justify-center">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />

        <img
          alt="search"
          src={searchIcon}
          className="h-11 border border-gray-400  rounded-r-full py-2 px-5"
        />
      </div>
      <div className="col-span-1">
        <img alt="user" src={userIcon} className="h-8" />
      </div>
    </div>
  );
};

export default Head;
