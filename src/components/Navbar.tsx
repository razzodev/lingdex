import {NavLink} from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <nav>
        <ul>
            <li className='navbar-link'><NavLink to='/'>home</NavLink></li>
            <li className='navbar-link'><NavLink to='/profile'>profile</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar