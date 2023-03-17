import React from 'react'
import { useNavigate } from 'react-router-dom';


import  '../styles.css'


export default function FirstStep() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/step-two');
        // Navigate to the next step
      };

    
  return (
    <div className="StepConatiainer">
        <div className='step'>
        </div>
        <div className='stepCard'>
            <h1>Select Your Plan</h1>
            <p>You have the option of monthly and yearly billing</p>
            {/* <form>

            </form> */}

            <button onClick={handleClick}>
                Next
            </button>
        </div>

    </div>
  )
}
