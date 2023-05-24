import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FourthStep({
  userData,
  setUserData,

}) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userData, 'udu');
  }, [userData]);

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
const handleClick = () => {
    const updatedUserData = { ...currentUser, isCompleted: true};
    const updatedUsers = [...userData.slice(0, userData.length - 1), updatedUserData];
    setUserData(updatedUsers);
   
      navigate('/step-five');
  };

  return (
    <div className="stepCard">
      <div className="topStep">
        <h1>Finishing Up</h1>
        <h4 className="gray-text">You have the option of monthly or yearly billing.</h4>

        <div className="top-box">
          <p>{currentUser.name}</p>
        </div>
      </div>

      <div className="nextStep-box">
        <button onClick={handleClick}>Next</button>
      </div>
    </div>
  );
}

export default FourthStep;
