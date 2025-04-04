import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/login'
import Profile from './component/profile'
import UserContextProvider from './component/Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (      
    <UserContextProvider>
      <h1>context apis</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App

