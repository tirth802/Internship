import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const UserList = () => {
    const[user,setuser]=useState([])
    const getuserData=async()=>{
        const res=await axios.get("https://node5.onrender.com/user/user")
        console.log(res)
        console.log(res.data)
        setuser(res.data.data)
    }
    useEffect(()=>{getuserData},[])
  return (
    <div style={{textAlign:"center"}}>
        <h1>UserList</h1>
        {/* <button onClick={()=>{getuserData()}}>GET</button> */}
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>EMAIL</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    user?.map((user)=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>
                                {
                                    user.isActive == true ? "Active" : "Not active"
                                }
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
  )
}
