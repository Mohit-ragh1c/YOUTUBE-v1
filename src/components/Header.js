import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { togglemenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { searchsuggetion } from '../const/const';

const Header = () => {


    const [searchquery,setsearchquery]=useState("");
    const dispatch=useDispatch();

   const togglemenuhandeler=()=>{
       dispatch(togglemenu());
   }

   useEffect(()=>{
    console.log(searchquery)

   const timer= setTimeout(() => getsearchsuggestion(), 200);

   return ()=>{
    clearTimeout(timer);
   }

   },[searchquery])

   const getsearchsuggestion=async()=>{
    const data=await fetch(searchsuggetion+searchquery);
    const json=await data.json();
    console.log(json);
   }

  return (
    <div className="grid grid-flow-col m-2 p-3 shadow-lg ">
      <div className="flex ml-2 col-span-1">
        <img alt='logo'
        onClick={()=>togglemenuhandeler()}
        className="h-12"
         src="https://static.vecteezy.com/system/resources/thumbnails/001/500/312/small/bullet-menu-icon-free-vector.jpg">
        </img>
        {/* <Link to="/"> */}
        <img alt='ytlogo'
          className="h-12"
        src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg">
        </img>
        {/* </Link>  */}
      </div>
      <div className="">
        <input type='text'
        value={searchquery}
        onChange={(e)=>setsearchquery(e.target.value)}
         className=" pl-4 w-1/2 border border-gray-400 p-1 rounded-l-full"></input>
        <button className="border border-gray-400 px-5 py-1 rounded-r-full bg-gray-400 "> Search</button>
      </div>
      <div className="fixed  ml-96 mt-10 bg-white py-2 w-[24rem] shadow-lg rounded-lg border-gray-300">
        <ul>
          <li className=" py-2 px-3 shadow-sm hover:bg-gray-200 rounded-md">ipohont</li>
        </ul>
      </div>
      <div>
        <img alt='user' 
          className="h-12"
        src="https://static.vecteezy.com/system/resources/previews/005/005/840/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"></img>

      </div>
    </div>
  )
}

export default Header
