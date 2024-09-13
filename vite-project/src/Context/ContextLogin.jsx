import React from 'react'
import { useState,useContext} from 'react'
import UserContext from './UserContext'

const ContextLogin = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");


    const {setUser}=useContext(UserContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})

    }
  return (
    <div className="login">
        <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter your username' /><br />
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your password' /><br />
        <input type="submit" value="Submit" onClick={handleSubmit} />
    </div>
      
  )
}

export default ContextLogin
