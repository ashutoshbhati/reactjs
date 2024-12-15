import { Route, Routes } from "react-router-dom"
import Header from "./Teamplate/Header"
import Home from "./Teamplate/Home"
import Css from "./Teamplate/Css"
import Js from "./Teamplate/Js"
import Jq from "./Teamplate/Jq"
import Reac from "./Teamplate/Reac"
import Navbar from "./Teamplate/Navbar"
import Home1 from "./Teamplate/Home1"


function App() {
 
  return (

   
    <>
     
     <Routes>
      
      <Route path="/" element={<Header/>}> 
      <Route path="/home" element={<Home/>}>
        <Route path="home1" element={<Home1/>}></Route>




        </Route>
      <Route path="/css" element={<Css/>}></Route>
      <Route path="/js" element={<Js/>}></Route>
       <Route path="/Jq" element={<Jq/>}></Route>
      <Route path="/reac" element={<Reac/>}></Route>
      </Route>
      
      
      
     </Routes>
    </>
  )
}

export default App
