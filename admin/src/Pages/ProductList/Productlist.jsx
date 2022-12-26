import React, { useState, useEffect } from 'react'
import './Productlist.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../../Dummydata';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProduct } from '../../Redux/apiCalls';

const Productlist = () => {
    const [products, setProducts] = useState(productRows);
    const dispatch = useDispatch();
    const Products = useSelector((state) => state.product.products);
    useEffect(() => {
        getProduct(dispatch);
    }, [dispatch]);
    const handleDelete = (id) => {
        deleteProduct(dispatch, id);
    }
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
            field: 'name', headerName: 'Products', width: 200,
            renderCell: (params) => {
                return (
                    <div className='productListUser'>
                        <img className='productListImg' src={params.row.img} alt='' />
                        {params.row.name}
                    </div>
                )
            },

        },
        { field: 'inStock', headerName: 'InStock', width: 130 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/' + params.row._id}>
                            <button className='productListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='productListDel' onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        }
    ];

    return (
        <div className='productlist'>
            <DataGrid
                rows={Products}
                columns={columns}
                getRowId={row => row._id}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default Productlist