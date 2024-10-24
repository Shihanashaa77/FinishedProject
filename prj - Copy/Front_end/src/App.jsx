import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Nav from './components/Nav'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Userhome from './user-module/Userhome'
import Profileupdate from './user-module/Profileupdate'
import Appliedjob from './user-module/Appliedjob'
import Browsejobs from './user-module/Browsejobs'
import Adminhome from './admin-module/Adminhome'
import Managejobs from './admin-module/Managejobs'
import Navadmin from './admin-module/Navadmin'
import Userinfo from './user-module/Userinfo'
import Viewapplications from './admin-module/Viewapplications'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />

        <Route path='/Userhome' element={<Userhome />} />
        <Route path='/Dashboard' element={<Userhome />} />
        <Route path='/Update' element={<Profileupdate />} />
        <Route path='/Applied' element={<Appliedjob />} />
        <Route path='/Browse' element={<Browsejobs />} />
        <Route path='/Navadmin' element={<Navadmin />} />

        <Route path='/Adminhome' element={<Adminhome />} />
        <Route path='/Managejobs' element={<Managejobs />} />
        <Route path='/Userinfo' element={<Userinfo />} />
        <Route path='/Viewapplications' element={<Viewapplications />} />

      </Routes>
    </>
  )
}

export default App
