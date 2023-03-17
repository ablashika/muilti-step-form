import React from 'react'
import { useNavigate } from 'react-router-dom';
import  '../styles.css';

export default function SecondStep() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/step-three');
        // Navigate to the next step
      };
  return (
    
        <div className="StepConatiainer">
        <div className='step'>
        </div>
        <div className='stepCard'>
            <h1>SecondStep</h1>
            <button onClick={handleClick}>
                Next
            </button>
        </div>

    </div>
   
  )
}
