import React from 'react'

const FormInput = ({name , lable , type , value , onchange}) => {
  return (
    <div className='form-input'>
        <lable htmlFor={name}>{lable}</lable>
        <input type={type} value={value} name={name} onchange={onchange}></input>
    </div>
  )
}

export default FormInput