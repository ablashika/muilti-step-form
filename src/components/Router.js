import React from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FourthStep from './FourthStep'
import FifthStep from './FifthStep'
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

export default function Routers({setActive,isActive}) {

  return (
    <Routes>
    <Route exact={true} path="/" element={<FirstStep setActive={setActive} isActive={isActive} />} />
    <Route exact={true} path="/step-two" element={<SecondStep setActive={setActive} isActive={isActive}/>} />
    <Route exact={true} path="/step-three" element={<ThirdStep setActive={setActive} isActive={isActive}/> } />
    <Route exact={true} path="/step-four" element={<FourthStep setActive={setActive} isActive={isActive}/>} />
    <Route exact={true} path="/step-five" element={<FifthStep  setActive={setActive} isActive={isActive}/>} />

  </Routes>
  )
}
