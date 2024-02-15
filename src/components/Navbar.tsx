import {NavLink} from 'react-router-dom'
import './Navbar.css';
import { useStore } from '../store';
function Navbar() {
  const {appStore:{contentStore}} = useStore()
  return (
    <nav>
        <ul>
            <li className='navbar-link' onClick={()=>contentStore.setCurrPage('home!!!')}><NavLink to='/'>home</NavLink></li>
            <li className='navbar-link'onClick={()=>contentStore.setCurrPage('profile!!!')}><NavLink to='/profile'>profile</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar