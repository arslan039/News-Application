import React from 'react';
import Loading from './Loading.gif';
export default function Spinner() {
  
    return (
      <div>
        <div className='text-center'>
            <img className="my-3" src={Loading} alt="Loading..." />

        </div>
      </div>
    )
  
}
