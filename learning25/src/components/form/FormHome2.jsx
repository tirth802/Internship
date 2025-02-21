import React from 'react'
import { useForm } from 'react-hook-form'

export const FormHome2 = () => {

    const{register,handleSubmit}=useForm()
    const submitHandler=(data)=>{
        console.log(data)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Catering Form</h1>
        
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' placeholder='enter name' {...register("fname")}></input>
            </div>
            <div>
                <label>DATE</label>
                <input type='date'placeholder='enter date' {...register("fdate")}></input>
            </div>
            <div>
               <label> Person event</label> 
               <input type='text' placeholder='person event'{...register('fperson')}></input>
            </div>
            <div>
                <label>Event Time</label><br></br>
                Breakfast<input type='checkbox'value={"breakfast"}{...register("event time")}></input>
                Lunch<input type='checkbox'value={"lunch"}{...register("event time")}></input>
                Dinner<input type='checkbox'value={"dinner"}{...register("event time")}></input>
            </div>
            <div>
                <input type='submit'value={"SUBMIT"}></input>
            </div>
        </form>
        </div>
  )
}
