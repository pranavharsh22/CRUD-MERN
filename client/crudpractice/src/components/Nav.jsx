import React from 'react'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
    const navigate=useNavigate()
  return (
    
    <div className='navbar'>
        <div className="nav-content">
            <p>Welcome</p>
            <p onClick={()=>navigate('/all')}>All Users</p>
            <p onClick={()=>{navigate('/add')}} >Add User</p>
        </div>
      
    </div>
  )
}

export default Nav
