import React, { useEffect, useState } from "react";
import { YT_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YT_VIDEO_API);
    const json = await data.json();

    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 &&
        videos.map((video, index) => <VideoCard key={index} info={video} />)}
    </div>
  );
};

export default VideoContainer;
