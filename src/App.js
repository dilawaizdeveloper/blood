import React from 'react'
import Home from './pages/Home';
import {BrowserRouter ,Routes ,Route, Link} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Bloodinfo from './pages/Bloodinfo';
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
            <Route path='/bloodinfo' element={<Bloodinfo/>}/>
            <Route path='/donar' element={<Donar/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/admin' element={<AdminLogin/>}/>
            <Route path='/search' element={<Search/>}/>
         

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
