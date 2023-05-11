
import '../src/styles.css';
import StepCard from './components/StepCard';
import { useLocation,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Routers from './components/Router';


function App() {
  const location = useLocation();
  const [isActive, setActive] = useState(location.pathname)
  const [userData, setUserData] = useState([{name:"Mahsd",email:"jhdbd",number:438}]);
  const [formComplete, setFormComplete] = useState({ isCompleted: false, fields: [] })
  // const [formComplete, setFormComplete] = useState({ isComplete: false });
  // const [formComplete, setFormComplete] = useState(
  //   {
  //           title: "Step 1",
  //           description: "Fill out this form",
  //           completed: false,
  //           fields: [
  //             { name: "name", label: "Name", value: "" },
  //             { name: "email", label: "Email", value: "" },
  //             { name: "password", label: "Password", value: "" },
  //           ],
  //         },
         
  // );
  const [isComplete, setIsComplete] = useState(false);

 

  useEffect(() => {
    
    setActive(location.pathname);
  }, [location.pathname]);
  useEffect(() => {
    setIsComplete(Object.values(formComplete).every(field => field));
  }, [formComplete]);
  
  const navigate = useNavigate()
  
  //checking if all inputs are field
  function handleNavigate(next) {
    const activeStepIndex = steps.findIndex(step => step.path === isActive);
    const activeStep = steps[activeStepIndex];
    const activeInputs = activeStep.inputs;
    const filledInputs = activeInputs.filter(input => userData[input.name]);
  
    if (filledInputs.length === activeInputs.length) {
      navigate(next);
    } else {
      alert('Please fill out all required fields.');
    }
  }
 
  //keeps track of data in each steps that need to be field
  const steps = [
    {
      path: "/",
      inputs: [
        { name: "name", required: true },
        { name: "email", required: true },
        { name: "number", required: true },
      ],
    },
    {
      path: "/step-two",
      inputs: [{ name: "plan", required: true }],
    },
    {
      path: "/step-three",
      inputs: [{ name: "payment", required: true }],
    },
    {
      path: "/step-four",
      inputs: [{ name: "confirmation", required: true }],
    },
  ];
  
  
  const isStepComplete = () => {
    return Object.values(formComplete).every(field => field);
  } 
  
  
  


  return (
    <div className="App">
    
      <div className="StepConatiainer">
        <div className='step radius'>
        <StepCard
        stepName="STEP 1"
        stepInfo="YOUR INFO"
        circle="1"
        isActive={isActive === '/'} 
        next='/'
        handleNavigate={handleNavigate}
        setFormComplete={setFormComplete}
        formComplete={formComplete}
        isComplete={isComplete}
        />
        <StepCard
        stepName="STEP 2"
        stepInfo="SELECT PLAN"
        circle="2"
        isActive= {isActive === '/step-two'}
        next={ '/step-two'}
        handleNavigate={handleNavigate}
        setFormComplete={setFormComplete}
        formComplete={formComplete}
        isComplete={isComplete}
        />
        <StepCard
        stepName="STEP 3"
        stepInfo="SELECT PLAN"
        circle="3"
        isActive= {isActive === '/step-three'}
        next={ '/step-three'}
        handleNavigate={handleNavigate}
        setFormComplete={setFormComplete} formComplete={formComplete}
        />
        <StepCard
        stepName="STEP 4"
        stepInfo="SELECT PLAN"
        circle="4"
        isActive={isActive === '/step-four'}
        next={ '/step-four'}
        handleNavigate={handleNavigate}
        setFormComplete={setFormComplete} formComplete={formComplete}
        />
        
        </div>
        <Routers isActive={isActive} setActive={setActive} userData={userData} setUserData={setUserData}/>
    </div>
    


   
    </div>
  );
}

export default App
