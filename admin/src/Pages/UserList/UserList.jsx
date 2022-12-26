import React, { useEffect, useState } from 'react'
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../Dummydata';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
const UserList = () => {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'Username', width: 200 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/' + params.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='userListDel' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];



    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserList