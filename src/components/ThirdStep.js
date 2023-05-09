// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useForm} from 'react-hook-form';

// let pickAdds = [
//   { id: 'item1', label: 'Item 1' },
//   { id: 'item2', label: 'Item 2' },
//   { id: 'item3', label: 'Item 3' }
// ]
// export default function ThirdStep() {


//   const { register, handleSubmit,formState: { errors } } = useForm();



// const navigate = useNavigate();
//   const handleClick = () => {
//         navigate('/step-four');
//    };

//   const handleClickBack = () => {
//         navigate('/step-two');
//   };


// const [isActiveOnline, setIsActiveOnline] = useState(false);
// const [isActiveLarger, setIsActiveLarger] = useState(false);
// const [isActive, setIsActive] = useState(false);

//   const handleToggleOnline = () => {
//     setIsActiveOnline(!isActiveOnline);
//   };

//   const handleToggleLarger = () => {
//     setIsActiveLarger(!isActiveLarger);
//   };

//   const handleToggle = () => {
//     setIsActive(!isActive);
//   };
//   return (
    
     
//     <div className='stepCard'>
//       <form  onSubmit={handleSubmit(handleClick)}>
//       <div className='topStep'>
//       <h1 >Pick add-ons</h1>
//     <h4 className='gray-text'>Add-ons help enhance your gaming experience.</h4> 
    
//     <div className='top-box'>
//       <div className={isActiveOnline?'adds-on-box-active':"adds-on-box"}>
//       <input className='check-box' type="checkbox" checked={isActiveOnline} onChange={handleToggleOnline} />
//        <div className='adds-on-items'>
//        <h3>Online Service</h3>
//        <p className='gret-text'>Access to multiple player games</p>
    
//        </div>
//        <p className='purple-text'>+$ 1/mo</p>
//       </div>
//       <div className={isActiveLarger?'adds-on-box-active':"adds-on-box"}>
//       <input className='check-box' type="checkbox" checked={isActiveLarger} onChange={handleToggleLarger} />
//        <div className='adds-on-items'>
//        <h3>Larger storagee</h3>
//        <p className='gret-text'>Extra 1TB of cloud save</p>
    
//        </div>
//        <p className='purple-text'>+$ 1/mo</p>
//       </div>
      
//       <div className={isActive?'adds-on-box-active':"adds-on-box"}>
//       <input className='check-box' type="checkbox" checked={isActive} onChange={handleToggle} />
//        <div className='adds-on-items'>
//        <h3>Online Service</h3>
//        <p className='gret-text'> Access to multiple player games</p>
    
//        </div>
//        <p className='purple-text'>+$ 1/mo</p>
//       </div>
      
      
//     </div>  
//       </div>
    

    
//     <div className='nextStep-box'>
//       <div 
//       onClick={handleClickBack}
      
//       className='gray-text'><p>Go Back</p></div>
//     <button onClick={handleClick}
//     >
//         Next
//     </button>
//     </div>
//       </form>
// </div>


//   )
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const addOns = [
  { id: 'onlineService', label: 'Online Service', description: 'Access to multiple player games', price: 1 },
  { id: 'largerStorage', label: 'Larger Storage', description: 'Extra 1TB of cloud save', price: 1 },
  { id: 'otherService', label: 'Other Service', description: 'Access to other services', price: 1 }
];

export default function ThirdStep() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/step-four');
  };

  const handleClickBack = () => {
    navigate('/step-two');
  };

  const [addOnSelection, setAddOnSelection] = useState(addOns.map(addOn => ({ ...addOn, isActive: false })));

  const handleToggle = (id) => {
    setAddOnSelection(addOnSelection.map(addOn => {
      if (addOn.id === id) {
        return { ...addOn, isActive: !addOn.isActive };
      } else {
        return addOn;
      }
    }));
  };

  return (
    <div className='stepCard'>
      <form onSubmit={handleSubmit(handleClick)}>
        <div className='topStep'>
          <h1>Pick add-ons</h1>
          <h4 className='gray-text'>Add-ons help enhance your gaming experience.</h4>

          <div className='top-box'>
            {addOnSelection.map(addOn => (
              <div key={addOn.id} className={addOn.isActive ? 'adds-on-box-active' : 'adds-on-box'}>
                <input className='check-box' type="checkbox" checked={addOn.isActive} onChange={() => handleToggle(addOn.id)} />
                <div className='adds-on-items'>
                  <h3>{addOn.label}</h3>
                  <p className='gret-text'>{addOn.description}</p>
                </div>
                <p className='purple-text'>+${addOn.price}/mo</p>
              </div>
            ))}
          </div>
        </div>

        <div className='nextStep-box'>
          <div onClick={handleClickBack} className='gray-text'><p>Go Back</p></div>
          <button onClick={handleClick}>Next</button>
        </div>
      </form>
    </div>
  );
}

