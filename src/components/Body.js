import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {
  return (
    <div>
      <Header></Header>
    <div className="flex  justify-between">
    <Sidebar></Sidebar>
    <Outlet></Outlet>
    </div>
    </div>
  )
}

export default Body
