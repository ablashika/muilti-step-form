
import '../src/styles.css';
import StepCard from './components/StepCard';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Routers from './components/Router';




function App() {
 
  const location = useLocation();
  const [isActive, setActive] = useState(location.pathname)

  console.log(isActive)
  
  return (
    <div className="App">
      <div className="StepConatiainer">
        <div className='step'>
        <StepCard
        stepName="STEP 1"
        stepInfo="YOUR INFO"
        circle="1"
        isActive={isActive === '/'} 
        />
        <StepCard
        stepName="STEP 2"
        stepInfo="SELECT PLAN"
        circle="2"
        isActive= {isActive === '/step-two'}
        />
        <StepCard
        stepName="STEP 3"
        stepInfo="SELECT PLAN"
        circle="3"
        isActive= {isActive === '/step-three'}
        />
        <StepCard
        stepName="STEP 4"
        stepInfo="SELECT PLAN"
        circle="4"
        isActive={isActive === '/step-four'}
        />
        
        </div>
        
        
        <Routers isActive={isActive} setActive={setActive}/>
      
      


    </div>


   
    </div>
  );
}

export default App;
