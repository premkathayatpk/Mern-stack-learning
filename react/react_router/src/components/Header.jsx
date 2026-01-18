import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div
    className='header'
    >
      <NavLink className='nav' to={'/'} >Home</NavLink>
      <NavLink className='nav' to={'/about'} >About</NavLink>
      <NavLink className='nav' to={'/contact'} >Contact us</NavLink>
      <NavLink className='nav' to={'/product'} >Product</NavLink>
      <NavLink className='nav' to={'/login'} >Login</NavLink>
       <NavLink className='nav' to={'/register'} >Register</NavLink>
    </div>
  )
}

export default Header
