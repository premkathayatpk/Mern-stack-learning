
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div
    className='bg-black text-white p-3 space-x-5'
    >
      <NavLink className='' to={'/'} >Home</NavLink>
      <NavLink className='' to={'/about'} >About</NavLink>
      <NavLink className='' to={'/contact'} >Contact us</NavLink>
      <NavLink className='' to={'/product'} >Product</NavLink>
      <NavLink className='' to={'/login'} >Login</NavLink>
      <NavLink to={'/admin'}>Admin</NavLink>
     
    </div>
  )
}

export default Header
