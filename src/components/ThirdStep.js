
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const addOns = [
  { id: 'onlineService', label: 'Online Service', description: 'Access to multiple player games', price: 1 },
  { id: 'largerStorage', label: 'Larger Storage', description: 'Extra 1TB of cloud save', price: 1 },
  { id: 'otherService', label: 'Other Service', description: 'Access to other services', price: 1 }
];

export default function ThirdStep({ userData, setUserData }) {
  const [addOnSelection, setAddOnSelection] = useState(addOns.map(addOn => ({ ...addOn, isActive: false })));

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const handleClick = () => {
    const formData = addOnSelection.filter(addOn => addOn.isActive).map(addOn => addOn.id);
    const updatedUserData = userData.map(user => ({ ...user, addsOnSelected: formData }));
    setUserData(updatedUserData);
    navigate('/step-four');
  };

  const handleClickBack = () => {
    navigate('/step-two');
  };

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
                <input className='check-box' type="checkbox" checked={addOn.isActive} onChange={() => handleToggle(addOn.id)} name="payment"/>
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
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}


// Moved the addOns constant outside of the component as it does not depend on any prop or state.
// Replaced the isActiveOnline, isActiveLarger, and isActive state variables with a single addOnSelection state array, which is initialized with each add-on having an isActive property set to false.
// Updated the handleClick function to filter the addOnSelection array to get only the add-ons that are active, then map them to an array of their IDs, and finally update the userData state with this new array before navigating to the next step.
// Updated the handleToggle function to take an id parameter that identifies




// User

// The handleToggle function is responsible for toggling the selection of an add-on when its checkbox is clicked. It takes an id parameter that identifies the add-on being toggled.

// Inside the function, setAddOnSelection is called to update the addOnSelection state based on the id parameter. It maps over the addOnSelection array and checks if the current addOn object's id matches the id parameter. If it does, the isActive property of the object is toggled to the opposite of its current value. If it doesn't match, the object is returned without any changes.

// The updated addOnSelection state is then used to update the checkbox input's checked property and the isActive class is added or removed from the add-on item based on its isActive value.


   
// //     <div className='nextStep-box'>
// //       <div 
// //       onClick={handleClickBack}
      
// //       className='gray-text'><p>Go Back</p></div>
// //     <button onClick={handleClick}
// //     >
// //         Next
// //     </button>
// //     </div>
// //       </form>
// // </div>


// //   )
// // }


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';

// const addOns = [
//   { id: 'onlineService', label: 'Online Service', description: 'Access to multiple player games', price: 1 },
//   { id: 'largerStorage', label: 'Larger Storage', description: 'Extra 1TB of cloud save', price: 1 },
//   { id: 'otherService', label: 'Other Service', description: 'Access to other services', price: 1 }
// ];

// export default function ThirdStep({userData, setUserData}) {
//   const [addOnSelection, setAddOnSelection] = useState(addOns.map(addOn => ({ ...addOn, isActive: false })));

//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/step-four');

    

//   const formData = addOnSelection.map(item => item.id);
//   const updatedUserData = userData.map(user => {
//        return { ...user, addsOnSelected: formData };
//   });

//   setUserData(updatedUserData);
//   console.log(userData, "js");
 
//   };

//   const handleClickBack = () => {
//     navigate('/step-two');
//   };

  
//   const handleToggle = (id) => {
//     setAddOnSelection(addOnSelection.map(addOn => {
//       if (addOn.id === id) {
//         return { ...addOn, isActive: !addOn.isActive };
//       } else {
//         return addOn;
//       }
//     }));

//      // if (isChecked) {
//     //   setAddOnSelection([...addOnSelection, item]);
//     // } else {
//     //   setAddOnSelection(addOnSelection.filter(selectedItem => selectedItem.id !== item.id));
//     // }
//   };

  

//   return (
//     <div className='stepCard'>
//       <form onSubmit={handleSubmit(handleClick)}>
//         <div className='topStep'>
//           <h1>Pick add-ons</h1>
//           <h4 className='gray-text'>Add-ons help enhance your gaming experience.</h4>

//           <div className='top-box'>
//             {addOnSelection.map(addOn => (
//               <div key={addOn.id} className={addOn.isActive ? 'adds-on-box-active' : 'adds-on-box'}>
//                 <input className='check-box' type="checkbox" checked={addOn.isActive} onChange={() => handleToggle(addOn.id)} />
//                 <div className='adds-on-items'>
//                   <h3>{addOn.label}</h3>
//                   <p className='gret-text'>{addOn.description}</p>
//                 </div>
//                 <p className='purple-text'>+${addOn.price}/mo</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className='nextStep-box'>
//           <div onClick={handleClickBack} className='gray-text'><p>Go Back</p></div>
//           <button onClick={handleClick}>Next</button>
//         </div>
//       </form>
//     </div>
//   );
// }




