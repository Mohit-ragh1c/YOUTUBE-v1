import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closemenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';


const Watch = () => {

  const [searchParams]=useSearchParams();


  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(closemenu());
  },[])

  return (
    <div className="px-5">
     <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+searchParams.get("v") } title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default Watch
