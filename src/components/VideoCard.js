import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 h-[20rem] w-64 shadow-2xl hover:bg-gray-200 rounded-lg ">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

//Higher Order Component 

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-200">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
