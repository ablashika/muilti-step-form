import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm} from 'react-hook-form';
import  '../styles.css';
import { addOrUpdateUserData, updateUser} from '../slice/UserSlice';
import { useDispatch,useSelector } from 'react-redux';


const items = [
  { id: 'item1', label: 'Item 1' },
  { id: 'item2', label: 'Item 2' },
  { id: 'item3', label: 'Item 3' }
];


export default function SecondStep() {
  const [isOn, setIsOn] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const { register, handleSubmit,formState: { errors } } = useForm();
  
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user.users)
  console.log(userData,"j")
  const currentUserIndex = userData.length - 1;

  const handleFormSubmit = () => {
    const formData = selectedItems.map((item) => item.id);
    const updatedUserData = { itemsSelected: formData };
    dispatch(updateUser({ userId: userData[currentUserIndex].id, updatedData: updatedUserData }));
    dispatch(addOrUpdateUserData({userId: userData[currentUserIndex].id, updatedData: updatedUserData }))
    navigate('/step-three');
  };
  

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const handleCheckboxChange = (item, isChecked) => {
    if (isChecked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem.id !== item.id));
    }
  };
 
return (
 
  <div className="stepCard">
     <form onSubmit={handleSubmit(handleFormSubmit)}>
    <div className="topStep topStep-second">
      <div className="top-text-box">
        <h1>Select Your Plan</h1>
        <h4 className="gray-text">You have the option of monthly or yearly billing.</h4>
      </div>
      <div className="top-box secondstep-topbox">
        <div className="plan-container">
          {items.map((item) => (
            <React.Fragment key={item.id}>
              <input
                type="checkbox"
                name='plan'
                id={item.id}
                className="check"
                {...register("plan", item.id, { required: true })}
                onChange={(e) => handleCheckboxChange(item, e.target.checked)}
              />
              <label
                htmlFor={item.id}
                className={`plan-card ${
                  selectedItems.some((selectedItem) => selectedItem.id === item.id)
                    ? 'selectBoxActive'
                    : ''
                }`}
              >
                {item.label}
              </label>
            </React.Fragment>
          ))}
        </div>
        <div className="subscription-time">
          <div className="toggle-container">
            <p className={isOn ? 'gray-text' : ''}>Monthly</p>
            <div className="toggle-switch" onClick={handleToggle}>
              <div className={isOn ? 'toggle-button-on' : 'toggle-button-off'}></div>
            </div>
            <p className={isOn ? '' : 'gray-text'}>Yearly</p>
          </div>
        </div>
      </div>
    </div>
    <div className="nextStep-box-second">
      <button type="submit">Next</button>
    </div>
    </form>
  </div>

   
  )
}













// import React,{useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useForm} from 'react-hook-form';
// import  '../styles.css';
// import { updateUser} from '../slice/UserSlice';
// import { useDispatch,useSelector } from 'react-redux';


// const items = [
//   { id: 'item1', label: 'Item 1' },
//   { id: 'item2', label: 'Item 2' },
//   { id: 'item3', label: 'Item 3' }
// ];


// export default function SecondStep() {
//   const [isOn, setIsOn] = useState(false);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const { register, handleSubmit,formState: { errors } } = useForm();
  
  
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const userData = useSelector((state) => state.user.users)
//   console.log(userData,"j")
//   const currentUserIndex = userData.length - 1;

//   // const handleFormSubmit = () => {
//   //   const updatedUserData = { ...userData, itemsSelected: selectedItems.map(item => item.id) };
//   //   dispatch(setUsersData(updatedUserData));
//   //   navigate('/step-three');
//   // };
//   // const handleFormSubmit = () => {
//   //   const formData = selectedItems.map((item) => item.id);
//   //   const currentUserIndex = userData.length - 1;
//   //   const updatedUserData = [...userData];
//   //   updatedUserData[currentUserIndex] = { ...updatedUserData[currentUserIndex], itemsSelected: formData };
//   //   dispatch(setUsersData(updatedUserData));
//   //   navigate('/step-three');
//   // };
//   const handleFormSubmit = () => {
//     const formData = selectedItems.map((item) => item.id);
//     const updatedUserData = { itemsSelected: formData };
//     dispatch(updateUser({ userId: userData[currentUserIndex].id, updatedData: updatedUserData }));
//     navigate('/step-three');
//   };
//   // useEffect(() => {
//   //   const formData = selectedItems.map(item => item.id);
//   //   const currentUserIndex = userData.length - 1;
//   //   const updatedUserData = [...userData];
//   //   updatedUserData[currentUserIndex] = { ...updatedUserData[currentUserIndex], itemsSelected: formData };
//   //   updateUser(updatedUserData);
//   // }, [selectedItems]);

//   const handleToggle = () => {
//     setIsOn(!isOn);
//   };

//   const handleCheckboxChange = (item, isChecked) => {
//     if (isChecked) {
//       setSelectedItems([...selectedItems, item]);
//     } else {
//       setSelectedItems(selectedItems.filter(selectedItem => selectedItem.id !== item.id));
//     }
//   };
 
// return (
 
//   <div className="stepCard">
//      <form onSubmit={handleSubmit(handleFormSubmit)}>
//     <div className="topStep topStep-second">
//       <div className="top-text-box">
//         <h1>Select Your Plan</h1>
//         <h4 className="gray-text">You have the option of monthly or yearly billing.</h4>
//       </div>
//       <div className="top-box secondstep-topbox">
//         <div className="plan-container">
//           {items.map((item) => (
//             <React.Fragment key={item.id}>
//               <input
//                 type="checkbox"
//                 name='plan'
//                 id={item.id}
//                 className="check"
//                 {...register("plan", item.id, { required: true })}
//                 onChange={(e) => handleCheckboxChange(item, e.target.checked)}
//               />
//               <label
//                 htmlFor={item.id}
//                 className={`plan-card ${
//                   selectedItems.some((selectedItem) => selectedItem.id === item.id)
//                     ? 'selectBoxActive'
//                     : ''
//                 }`}
//               >
//                 {item.label}
//               </label>
//             </React.Fragment>
//           ))}
//         </div>
//         <div className="subscription-time">
//           <div className="toggle-container">
//             <p className={isOn ? 'gray-text' : ''}>Monthly</p>
//             <div className="toggle-switch" onClick={handleToggle}>
//               <div className={isOn ? 'toggle-button-on' : 'toggle-button-off'}></div>
//             </div>
//             <p className={isOn ? '' : 'gray-text'}>Yearly</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="nextStep-box-second">
//       <button type="submit">Next</button>
//     </div>
//     </form>
//   </div>











        
    // <div className='stepCard'>
    //   <form onSubmit={handleFormSubmit}>
    //   <div className='topStep-second'>
    //       <div className='top-text-box'>
    //         <h1 >Select Your Plan</h1>
    //         <h4 className='gray-text'>You have the option of monthly or yearly billing.</h4> 
    //       </div>
    //       <div className='top-box secondstep-topbox'>
    //      <div className='plan-container'> 
    //            {items.map(item => (
    //             <React.Fragment key={item.id}>
    //               <input type="checkbox"
    //               name={item.id} // add a unique name to the input
 
    //               id={item.id} className='check' {...register(item.id, { required: true })} onChange={(e) => handleCheckboxChange(item, e.target.checked)} />
    //               <label htmlFor={item.id} className={`plan-card ${selectedItems.some(selectedItem => selectedItem.id === item.id) ? "selectBoxActive" : ""}`}>{item.label}</label>
    //               {errors[item.id] && (
    //   <p className="error">Please select {item.label}</p>
    // )}
    //             </React.Fragment>
                
                
    //           ))}
    //           {errors.item1 && <p>Item 1 is required</p>}
    //       {errors.item2 && <p>Item 2 is required</p>}
    //       {errors.item3 && <p>Item 3 is required</p>}
    //     </div>
    //     <div className='subscription-time'>
    //        <div className='toggle-container'>
    //        <p className={isOn ? 'gray-text' : ''}>Monthly</p>
    //     <div className="toggle-switch" onClick={handleToggle}>  
    //           <div className={isOn ? 'toggle-button-on' : 'toggle-button-off'}>
    //           </div> 

    //         </div>
    //          <p className={isOn ? '' : 'gray-text'}>Yearly</p>
    //        </div>

    //     </div> 
    //     </div>  
    //   </div>
    //     <div className='nextStep-box-second'>
    //     <button type="submit" 
    //     >
    //         Next
    //     </button>
    //     </div>
    //   </form>
    // </div>

    
   
//   )
// }



















// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import '../styles.css';

// const items = [
//   { id: 'item1', label: 'Item 1' },
//   { id: 'item2', label: 'Item 2' },
//   { id: 'item3', label: 'Item 3' }
// ];

// export default function SecondStep({userData,setUserData}) {
//   const [isMonthly, setIsMonthly] = useState(true);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const { register, handleSubmit } = useForm();
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const formData = selectedItems.map(item => item.id);
//   //   console.log(formData);
//   // }, [selectedItems]);

//   const handleToggle = () => {
//     setIsMonthly(!isMonthly);
//   };

//   const handleCheckboxChange = (event) => {
//     const { checked, id } = event.target;
//     const item = items.find(item => item.id === id);

//     if (checked) {
//       setSelectedItems([...selectedItems, item]);
//     } else {
//       setSelectedItems(selectedItems.filter(item => item.id !== id));
//     }
//   };

//   const handleFormSubmit = (data) => {
//      console.log('handleFormSubmit called');
//     const formData = selectedItems.map(item => item.id);
//     const updatedUserData = {...userData, itemsSelected: formData}; // add itemsSelected key with the formData value to userData
//     setUserData(updatedUserData);
//     console.log(data,"js");
//     navigate('/step-three');
   
//   };

//   return (
//     <div className='stepCard'>
//       <form onSubmit={handleSubmit(handleFormSubmit)}>
//         <div className='topStep'>
//           <div className='top-text-box'>
//             <h1>Select Your Plan</h1>
//             <h4 className='gray-text'>You have the option of monthly or yearly billing.</h4> 
//           </div>
//           <div className='top-box secondstep-topbox'>
//             <div className='plan-container'>
//               {items.map(item => (
//                 <React.Fragment key={item.id}>
//                   <input type="checkbox" id={item.id} className='check' {...register(item.id, { required: true })} onChange={handleCheckboxChange} />
//                   <label htmlFor={item.id} className={`plan-card ${selectedItems.some(selectedItem => selectedItem.id === item.id) ? "selectBoxActive" : ""}`}>{item.label}</label>
//                 </React.Fragment>
//               ))}
//             </div>
//             <div className='subscription-time'>
//               <div className='toggle-container'>
//                 <p className={!isMonthly ? 'gray-text' : ''}>Monthly</p>
//                 <div className="toggle-switch" onClick={handleToggle}>
//                   <div className={isMonthly ? 'toggle-button-on' : 'toggle-button-off'}></div> 
//                 </div>
//                 <p className={isMonthly ? '' : 'gray-text'}>Yearly</p>
//               </div>
//             </div> 
//           </div>  
//         </div>
//         <div className='nextStep-box'>
//           <button type="submit">Next</button>
//         </div>
//       </form>
//     </div>
//   );
// }

