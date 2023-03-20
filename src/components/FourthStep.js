import React from 'react'
import { useNavigate } from 'react-router-dom';



function FourthStep({setActive,isActive}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/step-five');
       
      };
  return (
        <div className='stepCard'>
            <h1>SecondStep</h1>
            <button 
            onClick={()=>{handleClick()
                setActive(!isActive)}}
            >
                Next
            </button>
        </div>


  )
}

export default FourthStep