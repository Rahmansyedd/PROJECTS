import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup'
import Sidenav from './components/Sidenav';
import Home from './components/Home';
import Forms from './components/Forms';
import Submissions from './components/Submissions';
import Inbox from './components/Inbox';



// import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <div className='d-flex'>
        <div className='col-auto'>
          <Sidenav />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/forms" element={<Forms />}></Route>
            <Route path="/Submissions" element={<Submissions />}></Route>
            <Route path="/inbox" element={<Inbox />}></Route>
            <Route path=''></Route>
          </Routes>
        </div>
      </div >
    </BrowserRouter>
  )
}



export default App