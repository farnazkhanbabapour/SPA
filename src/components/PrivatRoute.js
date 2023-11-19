import React from 'react'
import { isLogin } from '../Ultis'
import { Navigate, Outlet } from 'react-router-dom'
import Login from './Login'

export default function PrivatRoute() {

    let isUserLogin= isLogin("Nana")



  return (
    <div>
        {isUserLogin ? 
        (<Outlet/>) :
        (<Navigate to="/login"/>)
        }
    
    </div>
  )
}
