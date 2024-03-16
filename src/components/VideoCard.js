import React from 'react'

const VideoCard = ({value}) => {
  
 const{snippet,statistics}=value;
 const{channelTitle,title,thumbnails}=snippet;


  return (
    <div className="p-2 m-2 w-[250px]  shadow-lg">
        <img className="rounded-lg" src={thumbnails.high.url}></img>
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount
} views</li>
        </ul>
    
    </div>
  )
};

export const AdvideoCard=(VideoCard)=>{
  return (
    <div className="p-1 m-1 birder border-red-950">
      <VideoCard></VideoCard>
    </div>
  )
}

export default VideoCard;