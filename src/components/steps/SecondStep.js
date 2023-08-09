import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm} from 'react-hook-form';
import '../../styles.css';
import {  updateUser} from '../../slice/UserSlice';
import { useDispatch,useSelector } from 'react-redux';


const items = [
  { id: 'item1', label:"Arcade",priceMo: '12', priceYr: '120',  svg:"M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z", fill: "#FFAF7E"},
  { id: 'item2', label: "Advanced", priceMo: '6',priceYr:'60', svg:"M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z",fill:"#F9818E" },
  { id: 'item3', label:"Pro", priceMo: '3',priceYr:'300', svg:"M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z", fill:"#483EFF"}
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
    
        navigate('/step-three');
  };
  
  const handleClickBack = () => {
    navigate('/');
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
              
                <div className='plan-items'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill={item.fill}/><path fill="#FFF" fill-rule="nonzero" d={item.svg}/></g></svg>
                <div className='item-text'>
                <h3>{item.label}</h3>
               {isOn?
                <>
                <p>{item.priceYr}/yr</p>
                </>
                :
               <>
               <p>{item.priceMo}/mo</p>
               <p>2 months free</p>
               </>
               }
                </div>
                </div>
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
    <div className="nextStep-box">
    <button className="goback" onClick={handleClickBack}>Go Back</button>
      <button type="submit" className='button'>Next</button>
    </div>
    </form>
  </div>

   
  )
}






