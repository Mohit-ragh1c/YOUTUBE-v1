import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

 const ismenuopen=useSelector((store)=>store.app.ismenuopen) ;

 if(!ismenuopen) return null;


  return (
    <div  className=" w-2/12  mt-10"> 
        <div className="p-5 shadow-lg">
        <ul className="m-3">
            <Link to="/">
            <li> Home </li> 
            </Link>
            <li> Shorts </li>
            <li> Videos </li>
            <li> Live </li>
        </ul>
        <hr></hr>
        </div>
       <div className="p-5 shadow-lg">
        <h1>Subscriptions</h1>
        <ul className="m-3">
            <li> Music </li>
            <li> Sports </li>
            <li> Gaming </li>
            <li> Movies </li>
            <hr></hr>
        </ul>
       </div>
       <div className="p-5 shadow-lg">
        <h1>Watch Later</h1>
        <ul className="m-3">
            <li> Music </li>
            <li> Sports </li>
            <li> Gaming </li>
            <li> Movies </li>
            <hr></hr>
        </ul>
       </div>
       <div className="p-5 shadow-lg">
        <ul className="m-3">
           <Link to="/">
            <li> Home </li>
            </Link> 
            <li> Shorts </li>
            <li> Videos </li>
            <li> Live </li>
        </ul>
        <hr></hr>
        </div>
       <div className="p-5 shadow-lg">
        <h1>Subscriptions</h1>
        <ul className="m-3">
            <li> Music </li>
            <li> Sports </li>
            <li> Gaming </li>
            <li> Movies </li>
            <hr></hr>
        </ul>
       </div>
       <div className="p-5 shadow-lg">
        <h1>Watch Later</h1>
        <ul className="m-3">
            <li> Music </li>
            <li> Sports </li>
            <li> Gaming </li>
            <li> Movies </li>
            <hr></hr>
        </ul>
       </div>
    </div>
  )
}

export default Sidebar
