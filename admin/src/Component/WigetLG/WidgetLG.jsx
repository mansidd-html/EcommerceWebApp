import React, { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethod.js'
import './WidgetLG.css'
import {format} from 'timeago.js';
const WidgetLG = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await userRequest.get('/orders');
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getOrder();
  }, [])
  const Button = ({ type }) => {
    return <button className={'WidgetLGbtn ' + type}>{type}</button>
  }
  return (
    <div className='WidgetLG'>
      <h3 className='WidgetLGTitle'>Latest Transactions</h3>
      <table className='WidgetLGTable'>
        <tr className='WidgetLGTr'>
          <th className='WidgetLGTh'>Customer</th>
          <th className='WidgetLGTh'>Date</th>
          <th className='WidgetLGTh'>Amount</th>
          <th className='WidgetLGTh'>Status</th>
        </tr>
        {orders.map((order) => (
          <tr className='WidgetLGTr' key={order._id}>
            <td className='WidgetLGUser'>
              <img src={order.img || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt='' className='WidgetLGImg'></img>
              <span className='WidgetLGName'>{(order.userId).substr(0,9)+"..."}</span>
            </td>
            <td className='WidgetLGDate'>{format(order.createdAt)}</td>
            <td className='WidgetLGAmount'>${order.amount}</td>
            <td className='WidgetLGStatus'><Button type={order.status} /></td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default WidgetLG