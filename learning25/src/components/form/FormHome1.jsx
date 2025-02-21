import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom'

export const FormHome1 = () => {

    const{register,handleSubmit,formState:{errors}}=useForm()
    const submitHandler=(data)=>{
        console.log(data)
    }
    const ValidationScheme ={
        Namevalidation:{
            required:{
                value:true,
                message:"Name is required"

            }
        },
        emailvalidation:{
            required:{
                value:true,
                message:"email is required"

            },
            minLength:{
                value:5,
                message:"length"
            },
            pattern:{
                value:email,
                message:"mail is not valid"

            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Student Detail</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' placeholder='enter name' {...register("fname")}></input>
            </div>
            <div>
                <label>email</label>
                <input type='email' placeholder='enter email'{...register("fmail")}></input>
            </div>
            <div>
                <label>gender</label><br></br>
                Male<input type='radio' value={"male"} name='gender'{...register("gender")}></input>
                Female<input type='radio' value={"female"} name='gender'{...register("gender")}></input>
            </div>
            <div>
                <label>Branch</label>
                <select{...register("branch")}>
                    <option value={"CE"}>C.E.</option>
                    <option value={"IT"}>I.T</option>
                    <option value={"CSE"}>C.S.E</option>

                </select>
            <div>
                <input type='submit' value={"submit"}></input>
            </div>
            </div>

        </form>
    </div>
  )
}
