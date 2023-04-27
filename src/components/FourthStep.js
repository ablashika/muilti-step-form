import React from 'react'
import { useNavigate } from 'react-router-dom';



function FourthStep() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/step-five');
       
      };
  return (
        <div className='stepCard'>
            <div className='topStep'>
            <h1 >finishing Up</h1>
        <h4 className='gray-text'>You have the option of monthly or yearly billing.</h4> 
        
        <div className='top-box'>
       
        
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

export default FourthStep