import React from 'react'
import Home from './pages/Home';
import {BrowserRouter ,Routes ,Route, Link} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Event from './pages/Event';
import Donar from './pages/Donar';
import AdminLogin from './pages/AdminLogin';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import "./pages/style.css"
// import Accodian from './accordian/Accodian'
// import Accordian from './accordian/Accodian'


const App = () => {
  return (
    <div>
      <BrowserRouter>
   
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/event' element={<Event/>}/>
            <Route path='/' element={<Donar/>}/>
            <Route path='/' element={<Register/>}/>
            <Route path='/' element={<AdminLogin/>}/>
            <Route path='/search' element={<Search/>}/>
         


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
