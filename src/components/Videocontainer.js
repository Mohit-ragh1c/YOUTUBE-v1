import React, { useEffect, useState } from 'react'
import VideoCard,{AdvideoCard} from './VideoCard';
import { Link } from 'react-router-dom';


const Videocontainer = () => {

  const[items,setitems]=useState([]);

const obtaineddata= async()=>{

   const data=  await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyCkggIXddXXgtnooBdJAA5ydRsozT6aqmU");

   const json= await data?.json();
 setitems(json?.items);
 
}

useEffect(()=>{
  obtaineddata();
},[]);


  return (
    <div className="flex flex-wrap ml-39" >
    
  {
    items.map((item)=>(

  <Link to={"/watch?v="+item.id}>
    <VideoCard  key={item.id} value={item} ></VideoCard>
     </Link>

    )
    )
  }
    </div>
  )
}

export default Videocontainer
