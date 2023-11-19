import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function About() {

  let navigate= useNavigate()

  return (
    <div>
      <h1 style={{textAlign:"center", marginTop:"20px"}}>Welcome in About Page :))</h1>
      <div  style={{display:"flex",justifyContent:"center", marginTop:"20px"}}>
          <button
             onClick={()=> navigate("/login")}>register
          </button>

      </div>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <Link to="Dashboard" >Dashboard</Link>
        <Link to="Setting">Setting</Link>
        </div>
      <Outlet/>
    
    </div>
  )
}
