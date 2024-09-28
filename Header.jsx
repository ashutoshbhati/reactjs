import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'



function Header() {

    const navs=[{
        id:1,
       path:'/home',
        heading:"HTML"
    },{
        id:2,
        path:"/css",
        heading:"CSS"
    },{
        id:3,
        path:"/js",
        heading:"JAVASCRIPT"
    },{
        id:4,
        path:"jq",
        heading:"JQUERY"
    },{
        id:5,
        path:"reac",
        heading:"REACT"
    }]

    const link=navs.map((nav,id)=><NavLink to={nav.path} key={id}>{nav.heading} </NavLink>)






  return (
    <>
   <header>
    {link}
   </header>
   <Outlet/>
   
     
    
    
    </>
  )
}

export default Header