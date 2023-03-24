import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import  '../styles.css';

export default function SecondStep() {
    const [isOn, setIsOn] = useState(false);


    const navigate = useNavigate()
    const handleClick = (event) => {
        event.preventDefault()
        navigate('/step-three');
      };
    
        const handleToggle = () => {
          setIsOn(!isOn);
        };
      
  return (
    
        
        <div className='stepCard'>
        <h1 >Select Your Plan</h1>
        <h4 className='gray-text'>You have the option of monthly or yearly billing.</h4> 
        
        <div className='top-box'>
        <div className='plan-container'> 
            <div className='plan-card'></div>
            <div  className='plan-card'></div>
            <div  className='plan-card'></div>
              
        </div>
        <div className='subscription-time'>
           <div className='toggle-container'>
           <p className={isOn ? 'gray-text' : ''}>Monthly</p>
        <div className="toggle-switch" onClick={handleToggle}>  
              <div className={isOn ? 'toggle-button-on' : 'toggle-button-off'}>
              </div>

            </div>
             <p className={isOn ? '' : 'gray-text'}>Yearly</p>
           </div>

        </div> 
        </div>  
        <div className='nextStep-box'>
        <button onClick={handleClick}
        >
            Next
        </button>
        </div>
    </div>

    
   
  )
}
