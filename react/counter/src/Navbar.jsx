import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="title">Custome Counter</div>
      <div className="nav_item">
        <ul>
          <li>Counter Two</li>
          <li>Counter One</li>
          <li>Buggy Counter</li>
          <li>Error Page</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
