import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm} from 'react-hook-form';
import '../../styles.css';
import {  updateUser} from '../../slice/UserSlice';
import { useDispatch,useSelector } from 'react-redux';


const items = [
  { id: 'item1', label: '12' },
  { id: 'item2', label: '60' },
  { id: 'item3', label: '3' }
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
    // const formData = selectedItems.map((item) => item.id);
    // const updatedUserData = { itemsSelected: formData };
    // dispatch(updateUser({ userId: userData[currentUserIndex].id, updatedData: updatedUserData }));
    const formData = selectedItems.map((item) => item.id);
    const updatedUserData = { itemsSelected: formData };
    dispatch(updateUser({ userId: userData[currentUserIndex].id, updatedData: updatedUserData }));
    
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
               {isOn?
                <p>{item.label}/yearly</p>:
        
               <p>{item.label}/monthly</p>
               }
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






