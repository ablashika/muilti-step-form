import React from 'react'
import { useNavigate } from 'react-router-dom';
import  '../styles.css';

export default function SecondStep({setActive}) {
    const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault()
        navigate('/step-three');
      };
  return (
    
        
        <div className='stepCard'>
            <h1>SecondStep</h1>
            <button onClick={handleClick}
            >
                Next
            </button>
        </div>

    
   
  )
}
