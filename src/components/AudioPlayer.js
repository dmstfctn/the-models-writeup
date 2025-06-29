"use client";
import {useState, useRef} from "react";

const AudioPlayer = ({url='', title=false}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  return (
    <div className="tmw-media tmw-media__audio">      
      <audio ref={audioRef} src={url} controls={false}/>
      <button onClick={()=>{
        console.log( audioRef.current.isPlaying );
        if( !audioRef.current.paused || audioRef.current.currentTime ){
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          setIsPlaying( false );
        } else {
          audioRef.current.play();
          setIsPlaying( true );
        }
      }}>        
        <img width="100" height="100" src={isPlaying ? '/btn-stop.png' : '/btn-play.png'} style={{ height: '100%', width: 'auto'}}/>
        {(title) ? <span>{title}</span> : ''}
      </button>      
    </div>
  );
};

export default AudioPlayer;