"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({url='', width=640, height=360, playsinline=true}) => {
  return (
    <div className="tmw-media tmw-media__video" style={{
      paddingTop: `${height / width * 100}%`
    }}>      
      <ReactPlayer        
        url={url}
        controls={true}
        width='100%'
        height='100%'
      />      
    </div>
  );
};

export default VideoPlayer;