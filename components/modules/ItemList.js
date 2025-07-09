import React from 'react'
import FormInput from './FormInput'

const ItemList = ({ form, setForm }) => {
    const { products } = form
    const addHandler = () => {
        setForm({
            ...form, products: [...products, { name: "", Price: "", qty: "" }]
        })
        console.log(products)
    }
    const changeHandler = (e,index) => {
        const {name , value} = e.target
        const newProducts = [...products]
        newProducts[index][name]=value
        setForm({...form , products:newProducts})
    }
    const deleteHandler = (index) => {
        const newProducts = [...products]
        newProducts.splice(index,1)
        setForm({...form , products:newProducts})
    }
    return (
        <div className='item-list'>
            <p>purchased products</p>
            {products.map((product,index) => (
               <ProductItem key={index} product={product}
               changeHandler={(e)=>changeHandler(e,index)}
               deleteHandler={()=>deleteHandler(index)}></ProductItem>
            ))}
            <button onClick={addHandler}>Add Item</button>
        </div>
    )
}

export default ItemList

function ProductItem ({product , changeHandler , deleteHandler}){
    return(
         <div className='form-input__list'>
                    <FormInput name="name" label="product name" type="text" value={product.name}
                        onChange={changeHandler}></FormInput>
                    <div >
                        <FormInput name="Price" label="Price" type="number" value={product.price}
                            onChange={changeHandler}></FormInput>
                        <FormInput name="qty" label="Qty" type="number" value={product.qty}
                            onChange={changeHandler}></FormInput>

                    </div>
                    <button onClick={deleteHandler}>remove</button>
                </div>
    )
}