import React, { Component } from 'react'
import Loader from '../loader.gif'




 const loader=()=>  {
 
    return (
      <div className='text-center'>
        <img src={Loader} alt="Loading" ></img>
      </div>
    )
  }


export default loader
