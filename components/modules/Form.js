import React from 'react'
import ItemList from './ItemList'
import FormInput from './FormInput'

const Form = ({ form, setForm }) => {
  const changeHandler = (e) =>{
    const {name , value} = e.target
    setForm({...form , [name]:value})
  }
  return (
    <>
      <FormInput name="name" label='name' type="text" value={form.name} onChange={changeHandler}></FormInput>
      <FormInput name="lastName" label='lastName' type="text" value={form.lastName} onChange={changeHandler}></FormInput>
      <FormInput name="email" label='Email' type="text" value={form.email} onChange={changeHandler}></FormInput>
      <FormInput name="phone" label='phone' type="tel" value={form.phone} onChange={changeHandler}></FormInput>
      <FormInput name="address" label='Address' type="text" value={form.address} onChange={changeHandler}></FormInput>
      <FormInput name="postalCode" label='Postal Code' type="text" value={form.postalCode} onChange={changeHandler}></FormInput>
      <FormInput name="date" label='Date' type="date" value={form.date} onChange={changeHandler}></FormInput>
      <ItemList form={form} setForm={setForm}></ItemList>
    </>
  )
}

export default Form