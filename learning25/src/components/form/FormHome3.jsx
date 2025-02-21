import React from 'react'
import { useForm } from 'react-hook-form'


export const FormHome3 = () => {

    const{register,handleSubmit}=useForm()
    const submitHandler=(data)=>{
        console.log(data)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>KYC FORM</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Account Number</label>
                <input type='text' placeholder='account number'{...register('fnumber')}></input>
            </div>
            <div>
                <label >Date of Birth</label>
                <input type='date' placeholder='date of birth'{...register('date')}></input>
            </div>
            <div>
                <label>Gender</label><br></br>
                Male<input type='radio' value={"male"} name='gender'{...register("gender")}></input>
                Female<input type='radio' value={"female"} name='gender'{...register("gender")}></input>
                Transgender<input type='radio' value={"transgender"} name='gender'{...register("gender")}></input>

            </div>
            <div>
                <label>Viryfication Proof</label><br></br>
                Aadhar Card<input type='checkbox'value={"aadhar Card"}{...register("city")}></input>
                Pan card<input type='checkbox'value={"pan card"}{...register("city")}></input>
                Voter id<input type='checkbox'value={"voter id"}{...register("city")}></input>
            </div>
            <div>
                <label>city</label>
                <select{...register("address")}>
                    <option value={" ahmedbad"}> Ahmedbad</option>
                    <option value={" amreli"}>Amreli</option>
                    <option value={"pune"}> Pune</option>

                </select>
            </div>
            <div>
                <input type='submit' value={"submit"}></input>
            </div>

        </form>
        </div>
  )
}
