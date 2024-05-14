import React, { useEffect, useState } from 'react';
import { getUser,DeleteUser } from '../service/api';
import { Link } from 'react-router-dom';
const Alluser = () => {
    const [users,setUsers]=useState([])

    const getAllUser=async()=>{
        let response=await getUser();
        setUsers(response.data)

    }
    const deleteuser=async(id)=>{
        await DeleteUser(id)
    getAllUser();
       
    }
    useEffect(()=>{
        getAllUser();
    },[])
  return (
    <>
    {users.length>0 ?  (<div className='table-all'>
        <div className="table-content">
            <table border={1}>
                <tr>
                    <th>Id:</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
                {users.map((user,index)=>(
                     <tr key={index}>
                    
                     <td>{index+1}</td>
                     <td>{user.name}</td>
                     <td>{user.username}</td>
                     <td>{user.email}</td>

                     <td>{user.phone}</td>
                     <td><div className="button-section">
                        <Link to={`/edit/${user._id}`}>
                        <button >Edit</button>
                        </Link>
                     
                        <button onClick={()=>deleteuser(user._id)}>Delete</button></div></td>
                 </tr>
                ))}
               
            </table>
        </div>

      
    </div> ): (<div style={{textAlign:'center',fontSize:'30px',marginTop:'4rem',
    }}><p>No content found</p></div>)}
   
    </>
    
  )
}

export default Alluser
