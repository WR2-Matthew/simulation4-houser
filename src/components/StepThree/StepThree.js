import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StepThree = props => {

  let [mortgage, setMortgage] = useState(''),
    [rent, setRent] = useState('')

  return (
    <div>
      <div>
        <label>Monthly Mortgage Amount</label>
        <input value={mortgage} onChange={(e) => setMortgage(e.target.value)} />

        <label>Desired Monthly Rent</label>
        <input value={rent} onChange={(e) => setRent(e.target.value)} />
      </div>

      <div>
        <Link to='/wizard/step2'><button>Previous Step</button></Link>
        <button>Complete</button>
      </div>
    </div>
  )
};

export default StepThree;