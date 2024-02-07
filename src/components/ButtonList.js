import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Movies",
  "Anime",
  "Manga",
  "AOT",
  "Solo Leveling",
  "Demon Slayer",
  "Kingdom",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((category) => (
        <Button name={category} />
      ))}
    </div>
  );
};

export default ButtonList;
