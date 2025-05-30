"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({url=''}) => {
  return (
    <div className="tmw-media tmw-media__video">      
      <ReactPlayer        
        url={url}
        controls={true}
      />      
    </div>
  );
};

export default VideoPlayer;