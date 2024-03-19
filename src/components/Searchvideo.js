import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Searchpage from './Searchpage';
import { Link } from 'react-router-dom';


const Searchvideo = () => {
    const[searchParams]=useSearchParams();
    const [searchresult,setsearchresult]=useState("");
    const keyword=searchParams.get("v");
   

    async function videohandeler(){
        const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+keyword+"&type=video&key=AIzaSyCkggIXddXXgtnooBdJAA5ydRsozT6aqmU")
        const json=await data.json();
        setsearchresult(json.items);
      }
      useEffect(()=>{
        videohandeler();
      },[])

      if(!searchresult) return "loading";

  return (
    <div>
    {
        searchresult.map((video)=>(
            <Link  key={video.id} to={"/watch?v="+video.id.videoId}>
        <Searchpage key={video.id} video={video}></Searchpage>
        </Link>
        ))
    }
    </div>
  )
}

export default Searchvideo
