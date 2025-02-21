import React from 'react'

export const ArrayDemo1 = () => {
  
     var users =["raj","aayush","jay","man","kunal"]
    return (
    <div style={{textAlign:'center'}}>
        <h1 style={{color:'blue'}}>ArrayDemo1</h1>
        
        {
            users.map((user)=>{
                return<li>{user}</li>
            })
        }
        </div>
  )
}
