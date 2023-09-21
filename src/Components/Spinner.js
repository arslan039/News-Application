import React, { Component } from 'react'
import Loading from './Loading.gif'
export  class Spinner extends Component {
  render() {
    return (
      <div>
        <div className='text-center'>
            <img src={Loading} alt="Loading..." />

        </div>
      </div>
    )
  }
}
export default Spinner;