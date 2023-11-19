import React from 'react'
import{Container, Nav, Navbar } from 'react-bootstrap'
import {NavLink} from "react-router-dom"




export default function 
() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SabzLearn</Navbar.Brand>
          <Nav  className="me-auto">
            <NavLink style={{color:"white", marginLeft:35, textDecoration:"none"}} to="/">Home</NavLink>
            <NavLink style={({ isActive }) => ({  
                            color: isActive ? 'greenyellow' : 'white', marginLeft:35, textDecoration:"none" })}  to="Cources">Cources</NavLink>
            <NavLink style={{color:"white", marginLeft:35, textDecoration:"none"}} to="About">About</NavLink>
            <NavLink style={{color:"white", marginLeft:35, textDecoration:"none"}} to="login">Login</NavLink>
            <NavLink style={{color:"white", marginLeft:35, textDecoration:"none"}} to="panel">Panel</NavLink>
            <NavLink style={{color:"white", marginLeft:35, textDecoration:"none"}} to="dashbord">Dashbord</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
