import React from 'react'
import Type from './Type'
import { Link } from "react-router-dom";

export default function Inputs(props) {
  return (
    <div>
        <Type/>
        <div className='mx-auto'>
        <input type="text" className='busVal input-group-text form-control my-5' placeholder='Define your Business in one word!'/>
        {/* <button  className='btn btn-primary center' onClick={props.generateName}>Generate!</button> */}

        </div>
    </div>
  )
}
