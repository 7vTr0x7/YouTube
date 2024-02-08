import React, { useEffect, useState } from "react";
import menu from "../utils/images/menu.png";
import logo from "../utils/images/logo.png";
import userIcon from "../utils/images/user.png";
import searchIcon from "../utils/images/search.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YT_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    console.log("API calls - " + searchQuery);
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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

      <div className="col-span-10 flex justify-center  m-0">
        <input
          className="w-1/2 border h-9 border-gray-400 p-1 px-5 font-semibold rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />

        <img
          alt="search"
          src={searchIcon}
          className="h-9 border border-gray-400  rounded-r-full py-2 px-5"
        />

        {showSuggestion && (
          <div className="absolute  bg-white justify-start mt-10  w-[34rem] shadow-xl rounded-xl border border-gray-200">
            <ul className="my-3">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="flex  hover:bg-gray-300 px-5 py-1 cursor-default">
                  <img
                    alt="search"
                    src={searchIcon}
                    className="h-4 mt-1 mr-4 "
                  />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img alt="user" src={userIcon} className="h-8" />
      </div>
    </div>
  );
};

export default Head;
