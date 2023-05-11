
import React from 'react';

export default function StepCard(props) {
  return (
    <div className='step-circle-box' onClick={(event) => props.handleNavigate(props.next,event)}>
      <div className={props.isActive ? 'step-cirle-active radius' : 'step-cirle radius'}>
        {props.circle}
      </div>
      <div className='step-text-box'>
      <p className='step-text'>
      {props.isComplete ? "Completed" : "Incomplete"}
        </p>
        <p className='step-text'>{props.stepName}</p>
        <h4 className='step-text'>{props.stepInfo}</h4>
      </div>    
    </div>
  );
}

