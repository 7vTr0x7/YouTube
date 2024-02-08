import React from "react";
import userIcon from "../utils/images/user.png";

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex mt-3 shadow-lg bg-gray-100 p-2 rounded-lg">
      <img className="w-10 h-10 mt-2" alt="user" src={userIcon} />
      <div className="px-4">
        <p className="font-bold text-lg">{name}</p>
        <p className="font-semibold">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
