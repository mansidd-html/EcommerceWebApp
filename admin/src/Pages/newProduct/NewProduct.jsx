import React from 'react'
import './NewProduct.css';
import { Publish } from '@mui/icons-material'
const NewProduct = () => {
    return (
        <div className='newProduct'>
            <h1 className='newProductTitle'>New Product</h1>
            <form className='newProductForm'>
                <div className='newProductItem'>
                    <label>Image:</label>
                    <label htmlFor='file'><Publish /></label>
                    <input type='file' id='file' style={{ display: "none" }} />
                </div>
                <div className='newProductItem'>
                    <label>Product Name:</label>
                    <input type='text' placeholder='Hoodie' />
                </div>
                <div className='newProductItem'>
                    <label>Stock:</label>
                    <input type='text' placeholder='123' />
                </div>
                <div className='newProductItem'>
                    <label>Active:</label>
                    <select className='newProductSelect' name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='newProductItem'>
                    <button className='newProductBtn'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default NewProduct