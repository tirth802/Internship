import React,{useState} from 'react'

export const Hcomponent2 = () => {

     const[name,setname]=useState("")
     const[email,setemail]=useState("")
     const[gender,setgender]=useState("")
      const[date,setdate]=useState("")
      const[id,setid]=useState("")
          
  return (
    <div style={{textAlign:'center'}}>
        <h1>STUDENT DETAILS</h1>

    <div>
         <label>Student id</label>
         <input type='number' placeholder='Enter Id' onChange={(event)=>{setid(event.target.value)}}></input>
         {id}
    </div>
    <div>
        <label>Name</label>
        <input type='text' placeholder='Enter Name' onChange={(event)=>{setname(event.target.value)}}></input>
         {name} 
        </div>
    <div>
        <label>EMAIL</label>
        <input type='text' placeholder='enter email' 
        onChange={(event)=>{setemail(event.target.value)}}></input>
            {email}
    </div>
    <div>
        <label >Gender</label>
        <input type='text' placeholder='Enter Gender' onChange={(event)=>{setgender(event.target.value)}}></input>
        {gender}

    </div> 
    <div>
        <label >Birth Date</label>
        <input type='Date' placeholder='Enter  Birth Date' onChange={(event)=>{setdate(event.target.value)}}></input>
        {date}

    </div>
        </div>
  )
}
