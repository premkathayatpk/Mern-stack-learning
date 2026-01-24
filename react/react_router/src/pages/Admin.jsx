import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'

const Admin = () => {
  return (
    <div className='flex'>
      <div className='bg-black text-white flex flex-col p-5 h-50 space-y-4'>
        <NavLink to="productManagement" >ProductMng</NavLink>
        <NavLink to="orderManagement" >OrderMng</NavLink>
        <NavLink to="userManagement" >UserMng</NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Admin
