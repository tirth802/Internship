import axios from 'axios'
import React,{useState} from 'react'

export const ApiDemo1 = () => {

    const[message,setmessage]=useState("")
    const[users,setusers]=useState([])

    const getuserData=async()=>{
        const res=await axios.get("https://node5.onrender.com/user/user")
        console.log(res) //Axios object
        console.log(res.data) //api response...
        console.log(res.data.message)
        setmessage(res.data.message)
        setusers(res.data.data)
    }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 1</h1>
      <button onClick={()=>{getuserData()}}>GET</button>
      {message}
    
                <table class="table table-Gray">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>AGE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user)=>{
                            return(
                                <tr>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.isActive?"Active":"Not Active"}</td>

                                </tr>
                            )})
                        }
                    </tbody>
                </table>
           
        
    
      
    </div>

  )
}
