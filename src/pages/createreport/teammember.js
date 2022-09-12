import React from 'react'
export default function Teammember(props) {
  return (

    <label className=''>
      <h5>Member {props.number}:</h5>
      <input
        required
        type="text"
        placeholder="Enter name"
      />
      <input
        required
        type="text"
        placeholder="Enter roll"
      />
      <input
        required
        type="email"
        placeholder="Enter email"
      />
      <input
        required
        type="text"
        placeholder="Term and Session"
      />
    </label>


  )
}