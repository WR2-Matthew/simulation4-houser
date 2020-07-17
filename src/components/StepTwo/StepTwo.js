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
        <Link><button>Previous Step</button></Link>
        <Link><button>Next Step</button></Link>
      </div>
    </div>
  )
};

export default StepTwo;