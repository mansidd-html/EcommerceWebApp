import React from 'react'
import './Product.css'
import { Link, useLocation } from 'react-router-dom';
import Chart from '../../Component/Chart/Chart'
import { productData } from '../../Dummydata.js';
import { Publish } from '@mui/icons-material'
import { useSelector } from 'react-redux'
const Product = () => {
    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const product = useSelector(state => state.product.products.find((product) => product._id === productId));
    return (
        <div className='product'>
            <div className='productTitleContainer'>
                <h1 className='productTitle'>Product</h1>
                <Link to='/newproduct' className='link'>
                    <button className='productAddBtn'>Create</button>
                </Link>
            </div>
            <div className='productTop'>
                <div className='productTopLeft'>
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className='productTopRight'>
                    <div className='productInfoTop'>
                        <img className='productInfoImg' src='http://thestore.pk/image/cache/data/womens-hoodie/harley-43-700x700.jpg' alt='' />
                        <span className='productName'>{product?.title}</span>
                    </div>
                    <div className='productInfoBottom'>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>Id:</span>
                            <span className='productInfoValue'>{product?._id}</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>Sales:</span>
                            <span className='productInfoValue'>1200</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>Active:</span>
                            <span className='productInfoValue'>Yes</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>InStock:</span>
                            <span className='productInfoValue'>{product?.inStock}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='productBottom'>
                <form className='productForm'>
                    <div className='productFormLeft'>
                        <label>Product Name</label>
                        <input type='text' placeholder='Hoodie' />
                        <label>In Stock</label>
                        <select name='inStock' id='inStock'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name='active' id='active'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className='productFormRight'>
                        <div className='productUpload'>
                            <img className='productUploadImg' src='http://thestore.pk/image/cache/data/womens-hoodie/harley-43-700x700.jpg' alt='' />
                            <label htmlFor='file'><Publish /></label>
                            <input type='file' id='file' style={{ display: "none" }} />
                        </div>
                        <button className='productBtn'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product