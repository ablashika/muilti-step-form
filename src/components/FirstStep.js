import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  '../styles.css'
import {useForm} from 'react-hook-form'



export default function FirstStep({setActive}) {
    const { register, handleSubmit, formState: { errors },onChange } = useForm()

    // const { register, handleSubmit, errors } = useForm()

    const navigate = useNavigate();
    const handleClick = (data) => {
        // e.preventDefault()

        console.log({data})
        navigate('/step-two');
        // setActive('/step-two')
       
    
      };
    
    
      
     
  return (
    <div className='stepCard'  >
        <form onSubmit={handleSubmit(handleClick)}>
        <div className='topStep'>
            <h1>Personal info</h1>
            <p className='gray-text'>Please provide your name, email
            <br></br>
             address, and phone number.</p>
            <div className='top-box'>
           
                <p className='form-label'>Name</p>
                <input type="text" className='form-input' name='name' onChange={onChange} {...register("name", { required: true })}/>
                {errors.name && <span>This field is required</span>}
                <p className='form-label' >Email Address</p>
                <input type="email" className='form-input'  name='email' onChange={onChange} {...register("email", { required: true })}/>
                <p className='form-label'  name='number' type="email" onChange={onChange}> Phone Number</p>
                <input type="number" className='form-input'></input>
            

            
            </div>
        </div>

        <div className='nextStep-box'>
            <button  type="submit"
            >
                Next
            </button>
          </div>
        </form>



            
        </div>
  )
}
