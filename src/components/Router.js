import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FirstStep from './steps/FirstStep';
import SecondStep from './steps/SecondStep';
import ThirdStep from './steps/ThirdStep';
import FourthStep from './steps/FourthStep';
import FifthStep from './steps/FifthStep';

export default function Routers({
  setActive,
  isActive,
  userData,
  setUserData,
}) {
  const navigate = useNavigate();

  
  
  return (
    <Routes>
      <Route
        exact={true}
        path="/"
        element={
          <FirstStep
            setActive={setActive}
            isActive={isActive}
            userData={userData}
            setUserData={setUserData}
            
        
          />
        }
      />
      <Route
        exact={true}
        path="/step-two"
        element={
          <SecondStep
            setActive={setActive}
            isActive={isActive}
            userData={userData}
            setUserData={setUserData}     
          />
        }
      />
      <Route
        exact={true}
        path="/step-three"
        element={
          <ThirdStep
            setActive={setActive}
            isActive={isActive}
            userData={userData}
            setUserData={setUserData}
             
          />
        }
      />
      <Route
        exact={true}
        path="/step-four"
        element={
          <FourthStep
            setActive={setActive}
            isActive={isActive}
            userData={userData}
            setUserData={setUserData}
          
          />
        }
      />
      <Route
        exact={true}
        path="/step-five"
        element={
          <FifthStep
            setActive={setActive}
            isActive={isActive}
            userData={userData}
            setUserData={setUserData}
          
           />
        }
      />
    </Routes>
  );
}
