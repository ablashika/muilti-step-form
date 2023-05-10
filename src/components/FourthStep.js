import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

function FourthStep({userData}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/step-five');
    };

    useEffect(()=>{
        console.log(userData,"udu")
    },[userData]);

    // Check if the userData array is empty or not
    if (userData.length === 0) {
        return (
            <div>
                <p>No user data available</p>
            </div>
        );
    }

    // Check if there is a current user or not
    const currentUser = userData[userData.length - 1];
    if (!currentUser) {
        return (
            <div>
                <p>No current user found</p>
            </div>
        );
    }

    return (
        <div className='stepCard'>
            <div className='topStep'>
                <h1>Finishing Up</h1>
                <h4 className='gray-text'>You have the option of monthly or yearly billing.</h4> 
                
                <div className='top-box'>
                    <p>{currentUser.name}</p>
                </div>  
            </div>
       
            <div className='nextStep-box'>
                <button onClick={handleClick}>Next</button>
            </div>
        </div>
    );
}

export default FourthStep;



// function FourthStep({userData}) {
//     const navigate = useNavigate();
//     const handleClick = () => {
//         navigate('/step-five');
       
//       };

//       useEffect(()=>{
//         console.log(userData,"udu")
//       },[userData])
//   return (
//         <div className='stepCard'>
//             <div className='topStep'>
//             <h1 >finishing Up</h1>
//         <h4 className='gray-text'>You have the option of monthly or yearly billing.</h4> 
        
//         <div className='top-box'>
//             <p>{userData[userData.length-1].name}</p>
//         </div>  

//             </div>
       
//         <div className='nextStep-box'>
//         <button onClick={handleClick}
//         >
//             Next
//         </button>
//         </div>
  
            
//         </div>


//   )
// }

// export default FourthStep
