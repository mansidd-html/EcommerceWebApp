import React, { useEffect, useState } from 'react'
import './WidgetSm.css'
import { Visibility } from '@mui/icons-material'
import { userRequest } from '../../requestMethod.js'
const WidgetSm = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get('/users/?new=true');
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [])
  return (
    <div className='WidgetSm'>
      <span className='WidgetSmTitle'>New Join Member</span>
      <ul className='WidgetSmList'>
        {users.map((user) => (
          <li className='WidgetSmItem' key={user._id}>
            <img src={users.img || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt='' className='WidgetSmImg' />
            <div className='WidgetSmUser'>
              <span className='WidgetSmUsername'>{user?.username}</span>
              <span className='WidgetSmUsertitle'>Software Eng</span>
            </div>
            <button className='WidgetSmbtn'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WidgetSm