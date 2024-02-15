import { BrowserRouter, Routes, Route,NavLink } from 'react-router-dom'
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
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
