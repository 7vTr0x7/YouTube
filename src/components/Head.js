import React, { useEffect, useState } from "react";
import menu from "../utils/images/menu.png";
import logo from "../utils/images/logo.png";
import userIcon from "../utils/images/user.png";
import searchIcon from "../utils/images/search.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YT_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // make the api can on every key stroke
    // but decline api call if difference between 2 api calls < 200ms

    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

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
          className="h-8 cursor-pointer "
        />
        <a href="/">
          <img alt="logo" src={logo} className="h-8 ml-5  " />
        </a>
      </div>
      <div className="col-span-10 flex justify-center m-0">
        <input
          className="w-1/2 border h-9 border-gray-400 p-1 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <img
          alt="search"
          src={searchIcon}
          className="h-9 border border-gray-400  rounded-r-full py-2 px-5"
        />
      </div>
      <div className="col-span-1">
        <img alt="user" src={userIcon} className="h-8" />
      </div>
    </div>
  );
};

export default Head;
