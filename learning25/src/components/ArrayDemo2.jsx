import React from 'react'

export const ArrayDemo2 = () => {
    var student=[
        {
        name:"raj",
        rollno:21,
        marks:70
    },
    {
        name:"aayush",
        rollno:25,
        marks:80
    },
    {
    name:"parth",
    rollno:29,
    marks:75
    }
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:'green'}}>ArrayDemo2</h1>
        {
            student.map((stu)=>{
                return<div>
                    <h1>Name={stu.name}</h1>
                    <h1>Roll NO={stu.rollno}</h1>
                    <h1>Marks={stu.marks}</h1>
                    </div>
            })
        }
           
        </div>
  )
}
