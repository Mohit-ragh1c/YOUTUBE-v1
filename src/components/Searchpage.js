import React from 'react'

const Searchpage = ({video}) => {

    const {channelId,channelTitle,description,publishTime,thumbnails}=video.snippet;

  return (
    <div className="flex  gap-10 mt-4 ml-4">
            <div className="">
               <img src={thumbnails.medium.url}
               className="w-[400px] rounded-lg m-2"
                alt='image'></img>
            </div> 
            <div>
            <h2>{description}</h2>
            <h2>{channelTitle}</h2>
            <h2>{publishTime}</h2>
            <h2>{channelId}</h2>
            </div> 
    </div>
  )
}

export default Searchpage
