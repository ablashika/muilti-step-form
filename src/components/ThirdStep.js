import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';



export default function ThirdStep() {


const navigate = useNavigate();
  const handleClick = () => {
        navigate('/step-four');
   };

  const handleClickBack = () => {
        navigate('/step-two');
  };


const [isActiveOnline, setIsActiveOnline] = useState(false);
const [isActiveLarger, setIsActiveLarger] = useState(false);
const [isActive, setIsActive] = useState(false);

  const handleToggleOnline = () => {
    setIsActiveOnline(!isActiveOnline);
  };

  const handleToggleLarger = () => {
    setIsActiveLarger(!isActiveLarger);
  };

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    
     
    <div className='stepCard'>
      <div className='topStep'>
      <h1 >Pick add-ons</h1>
    <h4 className='gray-text'>Add-ons help enhance your gaming experience.</h4> 
    
    <div className='top-box'>
      <div className={isActiveOnline?'adds-on-box-active':"adds-on-box"}>
      <input className='check-box' type="checkbox" checked={isActiveOnline} onChange={handleToggleOnline} />
       <div className='adds-on-items'>
       <h3>Online Service</h3>
       <p className='gret-text'>Access to multiple player games</p>
    
       </div>
       <p className='purple-text'>+$ 1/mo</p>
      </div>
      <div className={isActiveLarger?'adds-on-box-active':"adds-on-box"}>
      <input className='check-box' type="checkbox" checked={isActiveLarger} onChange={handleToggleLarger} />
       <div className='adds-on-items'>
       <h3>Larger storagee</h3>
       <p className='gret-text'>Extra 1TB of cloud save</p>
    
       </div>
       <p className='purple-text'>+$ 1/mo</p>
      </div>
      
      <div className={isActive?'adds-on-box-active':"adds-on-box"}>
      <input className='check-box' type="checkbox" checked={isActive} onChange={handleToggle} />
       <div className='adds-on-items'>
       <h3>Online Service</h3>
       <p className='gret-text'> Access to multiple player games</p>
    
       </div>
       <p className='purple-text'>+$ 1/mo</p>
      </div>
      
      
    </div>  
      </div>
    

    
    <div className='nextStep-box'>
      <div 
      onClick={handleClickBack}
      
      className='gray-text'><p>Go Back</p></div>
    <button onClick={handleClick}
    >
        Next
    </button>
    </div>
</div>


  )
}
