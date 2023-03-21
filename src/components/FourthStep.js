import React from 'react'
import { useNavigate } from 'react-router-dom';



function FourthStep() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/step-five');
       
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

export default FourthStep