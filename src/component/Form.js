import React from 'react'

function Form(props) {
  return (
    <div>
      <label for={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} placeholder={props.placeholder}></input>
    </div>
  )
}

export default Form