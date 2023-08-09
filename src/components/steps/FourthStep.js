import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function FourthStep({
  setUserData,

}) {

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.users)
  console.log(userData,"user")

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
  console.log(currentUser,"yhh")
  if (!currentUser) {
    return (
      <div>
        <p>No current user found</p>
      </div>
    );
  }

const handleClick = () => {
    const updatedUserData = { ...currentUser, isCompleted: true};
    const updatedUsers = [...userData.slice(0, userData.length - 1), updatedUserData];
    setUserData(updatedUsers);
   
      navigate('/step-five');
  };
  const handleClickBack = () => {
    navigate('/step-three');
  };

  return (
    <div className="stepCard">
      <div className="topStep">
        <h1>Finishing Up</h1>
        <h4 className="gray-text">Double-check everything looks OK before confirming.</h4>
 
          <div className='top-box'>
          <div className= 'finish-box'>
               {currentUser.itemsSelected.map(user => (
                 
              <div className='times'>
              <p className='purple-text'>{user.label}</p>
              <p className='purple-text'>{user.priceMo||user.priceYr}</p>
              </div>
            

))} 
             </div>  
             <div className= 'adds-on-box'>
               {currentUser.addsOnSelected.map(user => (
                 
              <>
              <p className='purple-text'>{user.label}</p>
              <p className='purple-text'>+${user.price}</p>
              </>
            

))} 
             </div> 
      
          </div>
         
      </div>

      <div className="nextStep-box">
        <button onClick={handleClickBack} className='gray-text goback'><p>Go Back</p></button>
          <button onClick={handleClick}  type="submit" className='confirm'>Confirm</button>
      </div>
    </div>
  );
}

export default FourthStep;
