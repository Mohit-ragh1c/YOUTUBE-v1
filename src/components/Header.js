import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { togglemenu } from '../utils/appSlice';
import { searchsuggetion } from '../const/const';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {

    const [suggetion,setsuggetion]=useState([]);
    const [searchquery,setsearchquery]=useState("");
    const [showsuggetion,setshowsuggetion]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();

   const togglemenuhandeler=()=>{
       dispatch(togglemenu());
   }

   useEffect(()=>{
   
   const timer= setTimeout(() => getsearchsuggestion(), 200);

   return ()=>{
    clearTimeout(timer);
   }

   },[searchquery])

   const getsearchsuggestion=async()=>{
    const data=await fetch(searchsuggetion+searchquery);
    const json=await data.json();
    setsuggetion(json[1]);
   }


  return (
    <div className="grid grid-flow-col m-2 p-3 shadow-lg ">
      <div className="flex ml-2 col-span-1">
        <img alt='logo'
        onClick={()=>togglemenuhandeler()}
        className="h-12"
         src="https://static.vecteezy.com/system/resources/thumbnails/001/500/312/small/bullet-menu-icon-free-vector.jpg">
        </img>
        <Link to="/">
        <img alt='ytlogo'
          className="h-12"
        src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg">
        </img>
        </Link> 
      </div>
      <div className="">
        <input type='text'
        value={searchquery}
        onChange={(e)=>setsearchquery(e.target.value)}
        onFocus={()=>setshowsuggetion(true)}
        onBlur={()=>setshowsuggetion(false)}
         className=" pl-4 w-1/2 border border-gray-400 p-1 rounded-l-full"></input>
        <Link to={"/search?v="+searchquery}><button className="border border-gray-400 px-5 py-1 rounded-r-full bg-gray-400 "
        > Search</button>
        </Link>
      </div>
   {showsuggetion && ( 
      <div className="fixed ml-[400px] mt-10 bg-white py-2 w-[24rem] shadow-lg rounded-lg border-gray-300">
        
          {suggetion.map((s)=>(

            <button  key={s} className=" m-2 py-2 px-3 w-[20rem] shadow-sm hover:bg-gray-200 rounded-md">{s}</button>

          ))}
        
      </div>

        )}
     
      <div>
        <img alt='user' 
          className="h-12"
        src="https://static.vecteezy.com/system/resources/previews/005/005/840/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"></img>

      </div>
    </div>
  )
}

export default Header
