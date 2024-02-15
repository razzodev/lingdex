import { BrowserRouter, Routes, Route,NavLink } from 'react-router-dom'
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import {observer} from 'mobx-react-lite';
import { useStore } from './store';
const App =observer(()=> {
const {appStore:{contentStore}} = useStore()
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <p>current page: {contentStore.currPage}</p>
        <Routes>
          <Route path='/profile' element={<h3>profile</h3>}/>
          <Route path='/' element={<h3>homepage</h3>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
})

export default App
