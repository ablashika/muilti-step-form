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
    const currentUser = userData[userData.length - 1];
    if (!currentUser || !currentUser.isCompleted) {
      alert("Please complete the previous step before proceeding to the next step.");
      return;
    }
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





















































