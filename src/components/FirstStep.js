import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  '../styles.css'



export default function FirstStep({setActive}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/step-two');
        // setActive('/step-two')
       
    
      };
    
    
      
     
  return (
    <div className='stepCard'  >
            <div className='topStep'>
            <h1>Personal info</h1>
            <p className='gray-text'>Please provide your name, email, and phone number.</p>
            <div className='top-box'>
            <form>
                <p className='form-label'>Name</p>
                <input type="text" className='form-input'></input>
                <p className='form-label'>Email Address</p>
                <input type="email" className='form-input'></input>
                <p className='form-label'> Phone Number</p>
                <input type="number" className='form-input'></input>
            </form>

            
            </div>
            </div>

            <div className='nextStep-box'>
            <button onClick={handleClick}
            >
                Next
            </button>
            </div>
        </div>
  )
}
