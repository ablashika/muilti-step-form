import React from 'react'
import  '../styles.css'

export default function FirstStep() {

    
  return (
    <div className="StepConatiainer">
        <div className='step'>
        </div>
        <div className='stepCard'>
            <h1>Select Your Plan</h1>
            <p>You have the option of monthly and yearly billing</p>
            {/* <form>

            </form> */}

            <button>
                Next
            </button>
        </div>

    </div>
  )
}
