import React from 'react'
import { useNavigate } from 'react-router-dom';



export default function ThirdStep({setActive}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/step-four');
      };
  return (
    
    <div className='stepCard'>
        <h1>SecondStep</h1>
        <button 
         onClick={handleClick}
      
         >
            Next
        </button>
    </div>


  )
}
