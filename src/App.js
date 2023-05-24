import '../src/styles.css';
import StepCard from './components/StepCard';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Routers from './components/Router';

function App() {
  const location = useLocation();
  const [isActive, setActive] = useState(location.pathname);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const navigate = useNavigate();

  // checking if all inputs are filled
  function handleNavigate(next) {
    navigate(next);
  }

  console.log(userData, "y");
  return (
    <div className="App">
      <div className="StepConatiainer">
        <div className="step radius">
          <StepCard
            stepName="STEP 1"
            stepInfo="YOUR INFO"
            circle="1"
            isActive={isActive === '/'}
            next="/"
            handleNavigate={handleNavigate}
          />
          <StepCard
            stepName="STEP 2"
            stepInfo="SELECT PLAN"
            circle="2"
            isActive={isActive === '/step-two'}
            next="/step-two"
            handleNavigate={handleNavigate}
          />
          <StepCard
            stepName="STEP 3"
            stepInfo="SELECT PLAN"
            circle="3"
            isActive={isActive === '/step-three'}
            next="/step-three"
            handleNavigate={handleNavigate}
          />
          <StepCard
            stepName="STEP 4"
            stepInfo="SELECT PLAN"
            circle="4"
            isActive={isActive === '/step-four' || isActive === '/step-five'}
            next="/step-four"
            handleNavigate={handleNavigate}
          />
        </div>
        <Routers
          isActive={isActive}
          setActive={setActive}
          userData={userData}
          setUserData={setUserData}
        
        />
      </div>
    </div>
  );
}

export default App;

























































// import '../src/styles.css';
// import StepCard from './components/StepCard';
// import { useLocation,useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Routers from './components/Router';


// function App() {
//   const location = useLocation();
//   const [isActive, setActive] = useState(location.pathname)
//   const [userData, setUserData] = useState([{name:"Mahsd",email:"jhdbd",number:438,addsOnSelected: ['onlineService'],itemsSelected: ['item1']}]);
//   const [stepOneComplete, setStepOneComplete] = useState(false);
//   const [stepTwoComplete, setStepTwoComplete] = useState(false);
//   const [stepThreeComplete, setStepThreeComplete] = useState(false);
//   const [stepFourComplete, setStepFourComplete] = useState(false);

//   // Define form completion status for each step and its input fields
//   const [formComplete, setFormComplete] = useState([
//     {
//       path: "/",
//       inputs: [
//         { name: "name", required: true, complete: stepOneComplete },
//         { name: "email", required: true, complete: stepOneComplete },
//         { name: "number", required: true, complete: stepOneComplete },
//       ],
//       complete: stepOneComplete,
//     },
//     {
//       path: "/step-two",
//       inputs: [{ name: "plan", required: true, complete: stepTwoComplete }],
//       complete: stepTwoComplete,
//     },
//     {
//       path: "/step-three",
//       inputs: [{ name: "payment", required: true, complete: stepThreeComplete }],
//       complete: stepThreeComplete,
//     },
//     {
//       path: "/step-four",
//       inputs: [{ name: "confirmation", required: true, complete: stepFourComplete }],
//       complete: stepFourComplete,
//     },
//   ]);
//   const navigate = useNavigate();

//   // Update form completion status for each step based on input fields
 
//   // Update form completion status for each step based on input fields
//   useEffect(() => {
//     setFormComplete((prevFormComplete) =>
//       prevFormComplete.map((step) => {
//         const inputsComplete = step.inputs.every((input) => input.complete);
//         return {
//           ...step,
//           complete: inputsComplete,
//           inputs: step.inputs.map((input) => ({
//             ...input,
//             complete:
//               input.complete || (input.required && !input.complete && inputsComplete),
//           })),
//         };
//       })
//     );
//   }, [stepOneComplete, stepTwoComplete, stepThreeComplete, stepFourComplete]);

//   // Handle form navigation
//   function handleNavigate(next) {
//     console.log(stepOneComplete)
//     // Check if the form for the current step is complete
//     const currentStep = formComplete.find((step) => step.path === isActive);
//     if (!currentStep.complete) {
//       alert("Please complete the form before proceeding to the next step.");
//       return;
//     }
//     navigate(next);
//   }
//   useEffect(() => {
//     setActive(location.pathname);
//   }, [location.pathname]);

//   return (
//     <div className="App">
    
//       <div className="StepConatiainer">
//         <div className='step radius'>
//         <StepCard
//         stepName="STEP 1"
//         stepInfo="YOUR INFO"
//         circle="1"
//         isActive={isActive === '/'} 
//         next='/'
//         handleNavigate={handleNavigate}
//         setFormComplete={setFormComplete}
//         formComplete={formComplete}
//         />
//         <StepCard
//         stepName="STEP 2"
//         stepInfo="SELECT PLAN"
//         circle="2"
//         isActive= {isActive === '/step-two'}
//         next={ '/step-two'}
//         handleNavigate={handleNavigate}
//         setFormComplete={setFormComplete}
//         formComplete={formComplete}
//         />
//         <StepCard
//         stepName="STEP 3"
//         stepInfo="SELECT PLAN"
//         circle="3"
//         isActive= {isActive === '/step-three'}
//         next={ '/step-three'}
//         handleNavigate={handleNavigate}
//         setFormComplete={setFormComplete} formComplete={formComplete}
//         />
//         <StepCard
//         stepName="STEP 4"
//         stepInfo="SELECT PLAN"
//         circle="4"
//         isActive={isActive === '/step-four' }
//         next={ '/step-four'}
//         handleNavigate={handleNavigate}
//         setFormComplete={setFormComplete} formComplete={formComplete}
//         />
        
//         </div>
//         <Routers isActive={isActive} setActive={setActive} userData={userData} setUserData={setUserData}
//          stepOneComplete={stepOneComplete}
//          setStepOneComplete={setStepOneComplete}
//          stepTwoComplete={stepTwoComplete}
//          setStepTwoComplete={setStepTwoComplete}
//          stepThreeComplete={stepThreeComplete}
//          setStepThreeComplete={setStepThreeComplete}
//          stepFourComplete={stepOneComplete}
//          setStepFourComplete={setStepFourComplete}
         
        
//         />
//     </div>
    


   
//     </div>
//   );
// }

// export default App


// import '../src/styles.css';
// import StepCard from './components/StepCard';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Routers from './components/Router';

// function App() {
//   const location = useLocation();
//   const [isActive, setActive] = useState(location.pathname);
//   const [userData, setUserData] = useState([
//     { name: "Mandem", email: "jhdbd", number: 438, addsOnSelected: ['onlineService'], itemsSelected: ['item1'], }
//   ]);

//   // Define form completion status for each step and its input fields
//   const navigate = useNavigate();

//   // Update form completion status for each step based on input fields
  
//   // Handle form navigation
//   function handleNavigate(next) {
//     // Check if the form for the current step is complete
//     navigate(next);
//   }

//   useEffect(() => {
//     setActive(location.pathname);
//   }, [location.pathname]);

//   return (
//     <div className="App">
//       <div className="StepConatiainer">
//         <div className='step radius'>
//           <StepCard
//             stepName="STEP 1"
//             stepInfo="YOUR INFO"
//             circle="1"
//             isActive={isActive === '/'}
//             next='/'
//             handleNavigate={handleNavigate}
            
//           />
//           <StepCard
//             stepName="STEP 2"
//             stepInfo="SELECT PLAN"
//             circle="2"
//             isActive={isActive === '/step-two'}
//             next={'/step-two'}
//             handleNavigate={handleNavigate}
            
//           />
//           <StepCard
//             stepName="STEP 3"
//             stepInfo="SELECT PLAN"
//             circle="3"
//             isActive={isActive === '/step-three'}
//             next={'/step-three'}
//             handleNavigate={handleNavigate}
            
//           />
//           <StepCard
//             stepName="STEP 4"
//             stepInfo="SELECT PLAN"
//             circle="4"
//             isActive={isActive === '/step-four' || isActive === '/step-five' }
//             next={'/step-four'}
//             handleNavigate={handleNavigate}
           
//           />
//         </div>
//         <Routers
//           isActive={isActive}
//           setActive={setActive}
//           userData={userData}
//           setUserData={setUserData}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
