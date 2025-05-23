import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'


function Login() {


    const {username,setUsername}= useState('')
    const {password , setPassword}= useState('')

    //data fetch
    const {setUser}= useContext(UserContext)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
        
    }
    //over


  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Username' />
        <br />
        <input type="text"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password' />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button> 
        
    </div>
  )
}

export default Login
