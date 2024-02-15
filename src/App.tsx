import './App.css';
import { BrowserRouter, Routes, Route,NavLink } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <nav>
        <ul><NavLink to='/'>home</NavLink> </ul>
        <ul><NavLink to='/profile'>profile</NavLink> </ul>
      </nav>
        <p>Hello from Lingdex</p>
        <Routes>
          <Route path='/profile' element={<h3>profile</h3>}/>
          <Route path='/' element={<h3>homepage</h3>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
