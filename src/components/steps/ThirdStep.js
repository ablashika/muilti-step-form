import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { updateUser } from '../../slice/UserSlice';
import { useDispatch,useSelector } from 'react-redux';


const addOns = [
  { id: 'onlineService', label: 'Online Service', description: 'Access to multiple player games', price: 1 },
  { id: 'largerStorage', label: 'Larger Storage', description: 'Extra 1TB of cloud save', price: 1 },
  { id: 'otherService', label: 'Other Service', description: 'Access to other services', price: 1 }
];

export default function ThirdStep({}) {
  const [addOnSelection, setAddOnSelection] = useState(addOns.map(addOn => ({ ...addOn, isActive: false })));

  const {  handleSubmit  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user.users)
  console.log(userData,"j")

  const handleClick = () => {
    const formData = addOnSelection.filter(addOn => addOn.isActive).map(addOn => addOn);
    const updatedUserData = {
      userId: userData[userData.length - 1].id,
      updatedData: { addsOnSelected: formData }
    };
    dispatch(updateUser(updatedUserData));
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
          <button onClick={handleClickBack} className='gray-text goback'><p>Go Back</p></button>
          <button type="submit" className='button'>Next</button>
        </div>
      </form>
    </div>
  );
}

