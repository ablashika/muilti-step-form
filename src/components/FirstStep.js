import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  '../styles.css'
import {useForm} from 'react-hook-form'



export default function FirstStep({userData,setUserData}) {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate = useNavigate();


    const handleClick = (data) => {
        const newUser = { name: data.name, email: data.email, number: data.number};
        setUserData( [...userData, newUser])
        navigate('/step-two');
    }; 

 

    
     
  return (
    <div className='stepCard'  >
        <form onSubmit={handleSubmit(handleClick)}>
        <div className='topStep'>
           <div className='top-text-box'>
           <h1>Personal info</h1>
            <p className='gray-text'>Please provide your name, email
            <br></br>
             address, and phone number.</p>
           </div>
            <div className='top-box'>
                <p className='form-label'>Name</p>
                <input type="text" className='form-input' name='name'  {...register("name", { required: true })}/>
                {errors.name && <span>This field is required</span>}
                <p className='form-label' >Email Address</p>
                <input type="email" className='form-input'  name='email' {...register("email", { required: true })}/>
                <p className='form-label'   type="email"> Phone Number</p>
                <input type="number" name='number'className='form-input' {...register("number", { required: true })}/>    
            </div>
        </div>

        <div className='nextStep-box'>
            <button  type="submit">
                Next
            </button>
          </div>
        </form>



            
        </div>
  )
}
