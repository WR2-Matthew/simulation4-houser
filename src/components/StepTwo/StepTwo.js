import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StepTwo = props => {

  let [image, setImage] = useState('')

  return (
    <div>
      <div>
        <label>Image URL:</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} />
      </div>

      <div>
        <Link to='/wizard/step1'><button>Previous Step</button></Link>
        <Link to='/wizard/step3' ><button>Next Step</button></Link>
      </div>
    </div>
  )
};

export default StepTwo;