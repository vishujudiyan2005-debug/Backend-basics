import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const App = () => {

  const [users, setUsers] = useState([])
  useEffect(() => {
   axios.get('/api/users')
  .then((response)=>{
    setUsers(response.data)
  })
   .catch((error)=>{
    console.log(error)
   }) 
  })
  

  return (
    <div>
      <h1>Users List </h1>
    {
      users.map((user,idx)=>(
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h2>{user.role}</h2>
        </div>
      ))
    }
      
    </div>
  )
}

export default App
