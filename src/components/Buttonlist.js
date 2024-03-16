import React from 'react'

const Buttonlist = () => {
    const btn=["All","Gaming","Songs","Live","Soccer","News","Cricket","Cooking","Farming","trending","Cricket","Cooking","Farming"];

  return (
    <div>

    {
  btn.map((one,index)=>(
    <button key={index} className="m-3 px-2 py-1 bg-gray-300 rounded-lg" >{one}</button>
  ))

    }    
    </div>
  )
}

export default Buttonlist
