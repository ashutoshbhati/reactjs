import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Home() {


  const cont=[{
    id:1,
   path:'home1',
    heading:"HTML"
},{
    id:2,
    path:"/",
    heading:"CSS"
},{
    id:3,
    path:"/",
    heading:"JAVASCRIPT"
},{
    id:4,
    path:"",
    heading:"JQUERY"
},{
    id:5,
    path:"",
    heading:"REACT"
}]

const link=cont.map((con,id)=><NavLink to={con.path} key={id}>{con.heading} </NavLink>)

  return (
   
    <>
    <aside>
    {
      link
    }
    </aside>
    <Outlet/>
    
    
    
    </>
  )
}

export default Home