import React from 'react'
import { useParams } from 'react-router-dom'


export const HotstarPlay = () => {
    const id = useParams().id;
  return (
    <div style={{textAlign:'center'}}>
        <h1>HotstarPlay....{id}</h1>
        </div>
  )
}
