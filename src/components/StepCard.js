import React from 'react'

export default function StepCard(props) {
  return (
    

    
    <div className='step-circle-box'>
        <div className={props.isActive ? 'step-cirle-active' : 'step-cirle'}>{props.circle}</div>
        <div className='step-text-box'>
        <p className='step-text'>{props.stepName}</p>
         <h4 className='step-text'>{props.stepInfo}</h4>
        </div>    
    </div>
    
  )
}
