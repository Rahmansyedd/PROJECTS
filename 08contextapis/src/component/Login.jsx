import React, { useState, useContext } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setuser} = useContext{userContext}

    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({username,password})

    }
    return (
        <div>
            <h2> Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username'


            />
            {" "}
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
            <button onClick={handleSubmit}>
                submit
            </button>

        </div>
    )
}

export default Login
