import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=" p-2 m-2 w-[17rem] shadow-xl">
      <img className="rounded-xl" alt="thumbnail" src={thumbnails.high.url} />
      <ul>
        <li className="font-bold py-2"> {title}</li>
        <li>{channelTitle}</li>
        <li>views: {statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className=" p-1 m-1 border border-blue-950">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
