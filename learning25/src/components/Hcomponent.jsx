import React,{useState} from 'react'

export const Hcomponent = () => {

    const[name,setname]=useState("")
    const[age,setage]=useState("")
    const[gender,setgender]=useState("")
    const[date,setdate]=useState("")
    const[value,setValue]=useState("")

    const nameHandler =(event)=>{
        setname(event.target.value)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>AMTS TICKET</h1>
        <div>
        <label>Name</label>
        <input type='text' placeholder='Enter Name' onChange={(event)=>{nameHandler(event)}}></input>
         {name} 
        </div>
    
    <div>
        <label >age</label>
        <input type='text' placeholder='Enter Age' onChange={(event)=>{setage(event.target.value)}}></input>
        {age == 0 ? "" : age}

    </div>

     <div>
        <label >Gender</label>
        <input type='text' placeholder='Enter Gender' onChange={(event)=>{setgender(event.target.value)}}></input>
        {gender}

    </div> 
     
     <div>
        <label >Date</label>
        <input type='Date' placeholder='Enter Date' onChange={(event)=>{setdate(event.target.value)}}></input>
        {date}

    </div> 

    <div>
        <label >Contact</label>
        <input type='tel' placeholder='Enter Contact Number' onChange={(event)=>{setValue(event.target.value)}}></input>
        {value==0?"":value}

    </div> 
    </div>
     )
}
