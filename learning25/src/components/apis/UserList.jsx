import axios from 'axios'
import { CustomLoader } from '../CustomLoader'
import React, { useEffect, useState } from 'react'
import { Bounce,toast,ToastContainer } from 'react-toastify'

export const UserList = () => {
    const[user,setuser]=useState([])
    const[isLoading,setisLoading]=useState(false)
    const getuserData=async()=>{
        //start
        setisLoading(true)
        const res=await axios.get("https://node5.onrender.com/user/user")
        console.log(res)
        console.log(res.data)
        setuser(res.data.data)
        //end
        setisLoading(false)
    }
    useEffect(()=>{getuserData()},[])
    const deleteUser = async (id) => {
        //alert(id)
        const res = await axios.delete(
          "https://node5.onrender.com/user/user/" + id
        );
        console.log(res);
        if (res.status == 204) {
          //alert("user deleted..");
          toast.error('record deleted !!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
            getuserData(); //get -->
        }
        //const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
      };
  return (
    <div style={{textAlign:"center"}}>
          <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
       {/* {
            isLoading == true && <h1>Loading....</h1>
        } */}
        {isLoading == true && <CustomLoader/>}
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
                    <th>ACTION</th>
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
                             <td>
                                <button onClick={()=>{deleteUser(user._id)}}className='btn btn-danger'>DELETE</button>
                            </td> 
                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
  )
}
