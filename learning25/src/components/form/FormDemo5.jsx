import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {

    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log('errors',errors)
    const submitHandler = (data)=>{
        alert("subbmited...")
        console.log(data)
    }
        const validationschema= {
            agevalidator:{
                required:{
                    value:true,
                    message:"Age is required"
                }
            },
            emailvalidator:{
                required:{
                    value:true,
                    message:"email is required"
                }
            },
            minLength:{
                value:5,
                message:"length mim 5*"

            }
        
    }
  return (
    <div style={{textAlign:'center'}}>
        
        <h1>Form with Validation.</h1>
        
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' placeholder='Enter name'{...register("name",{required:{value:true,message:"message is required"}})}></input>
                 {/* {errors.name.message} */}
                {/* {
                    errors.name && errors.name.message
                } */}
                {
                    errors.name?.message
                }
            </div>
           <div>
             <label>Age</label>
             <input type='number' placeholder='Enter age'{...register("age",validationschema.agevalidator)}></input>
             <span>
                {
                    errors.age?.message
                }
             </span>
            </div> 
            <div>
                <input type="submit"></input>
            </div>
            
            </form></div>
  )
}
