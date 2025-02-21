import React from 'react'

export const Content = () => {
    var name="aayush"
    var age=19
    var isactive=false;
  return (
    <div style={{backgroundColor:"GrayText",color:"azure",textAlign:"center",width:"100%",height:"100%",position:'fixed',top:100}}>
      <h1>name={name}</h1>
      <h2>age={age}</h2>
      <h2>Active={isactive}</h2>
      <h2>Active={isactive==true?"active":"not active"}</h2>
    </div>
  )
}
