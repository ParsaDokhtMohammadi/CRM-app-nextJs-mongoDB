import React from 'react'
import FormInput from './FormInput'

const ItemList = ({ form, setForm }) => {
    const { products } = form
    const addHandler = () => {
        setForm({
            ...form, products: [...products, { name: "", price: "", qty: "" }]
        })
        console.log(products)
    }
    const changeHandler = () => {

    }
    const deleteHandler = () => {

    }
    return (
        <div className='item-list'>
            <p>purchased products</p>
            {products.map((product,index) => (
                <div className='form-input__list' key={index}>
                    <FormInput name="name" label="product name" type="text" value={product.name}
                        onchange={changeHandler}></FormInput>
                    <div >
                        <FormInput name="Price" label="Price" type="text" value={product.price}
                            onchange={changeHandler}></FormInput>
                        <FormInput name="qty" label="Qty" type="number" value={product.qty}
                            onchange={changeHandler}></FormInput>

                    </div>
                    <button onClick={deleteHandler}>remove</button>
                </div>
            ))}
            <button onClick={addHandler}>Add Item</button>
        </div>
    )
}

export default ItemList