// import React from 'react'
// import FirstStep from './FirstStep'
// import SecondStep from './SecondStep'
// import ThirdStep from './ThirdStep'
// import FourthStep from './FourthStep'
// import FifthStep from './FifthStep'
// import {Routes, Route} from "react-router-dom";

// export default function Routers({setActive,isActive, userData,setUserData ,formComplete,setFormComplete,setStepOneComplete,stepOneComplete,stepTwoComplete,
//   setStepTwoComplete,stepThreeComplete,setStepThreeComplete,stepFourComplete,setStepFourComplete
// }) {

//   return (
//     <Routes>
//     <Route exact={true} path="/" element={<FirstStep setActive={setActive} isActive={isActive} 
//     userData={userData} setUserData={setUserData}
//     setFormComplete={setFormComplete} formComplete={formComplete}
//     setStepOneComplete={setStepOneComplete}stepOneComplete={stepOneComplete}

//     />} />
//     <Route exact={true} path="/step-two" element={<SecondStep setActive={setActive} isActive={isActive}
//      userData={userData} setUserData={setUserData}
//      setFormComplete={setFormComplete} formComplete={formComplete}
//      stepTwoComplete={stepTwoComplete} setStepTwoComplete={setStepTwoComplete}
    
//     />} />
//     <Route exact={true} path="/step-three" element={<ThirdStep setActive={setActive} isActive={isActive}
//     setFormComplete={setFormComplete} formComplete={formComplete}
//      userData={userData} setUserData={setUserData}
//      stepThreeComplete={stepThreeComplete} setStepThreeComplete={setStepThreeComplete}

//     /> } />
//     <Route exact={true} path="/step-four" element={<FourthStep setActive={setActive} isActive={isActive}
//      userData={userData} setUserData={setUserData}
//      setFormComplete={setFormComplete} formComplete={formComplete}
//      setStepFourComplete={setStepFourComplete}stepFourComplete={stepFourComplete}

//     />} />
//     <Route exact={true} path="/step-five" element={<FifthStep  setActive={setActive} isActive={isActive}
//      userData={userData} setUserData={setUserData}
//      setFormComplete={setFormComplete} formComplete={formComplete}
//     />} />

//   </Routes>
//   )
// }


import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import FifthStep from './FifthStep';

export default function Routers({
  setActive,
  isActive,
  userData,
  setUserData,
  formComplete,
  setFormComplete,
  setStepOneComplete,
  stepOneComplete,
  stepTwoComplete,
  setStepTwoComplete,
  stepThreeComplete,
  setStepThreeComplete,
  stepFourComplete,
  setStepFourComplete,
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
            setFormComplete={setFormComplete}
            formComplete={formComplete}
            setStepOneComplete={setStepOneComplete}
            stepOneComplete={stepOneComplete}
        
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
            setFormComplete={setFormComplete}
            formComplete={formComplete}
            stepTwoComplete={stepTwoComplete}
            setStepTwoComplete={setStepTwoComplete}
            
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
            setFormComplete={setFormComplete}
            formComplete={formComplete}
            userData={userData}
            setUserData={setUserData}
            stepThreeComplete={stepThreeComplete}
            setStepThreeComplete={setStepThreeComplete}
         
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
            setFormComplete={setFormComplete}
            formComplete={formComplete}
            setStepFourComplete={setStepFourComplete}
            stepFourComplete={stepFourComplete}
            
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
            setFormComplete={setFormComplete}
            formComplete={formComplete}
          />
        }
      />
    </Routes>
  );
}
