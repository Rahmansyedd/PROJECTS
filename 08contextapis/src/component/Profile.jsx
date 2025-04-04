import React, { useContext } from 'react'
import UserContext from './Context/UserContext'

function Profile() {     
  const {user} = useContext(UserContext)


  if(!user) return <h1> Not logged in</h1>
  return (
    <div>Profile : {user}
      <h1>more component</h1>
      
    </div>
  )
}

export default Profile
