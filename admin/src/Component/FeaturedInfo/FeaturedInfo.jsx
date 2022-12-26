import React, { useState, useEffect } from 'react'
import './FeaturedInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import { userRequest } from '../../requestMethod.js';
const FeaturedInfo = () => {
    const [income, setIncome] = useState([]);
    const [perc, setPerc] = useState(0);
    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get("/orders/income");
                setIncome(res.data);
                setPerc((res.data[1].total * 100) / res.data[0].total - 100);
            } catch (error) {
                console.log(error);
            }
        }
        getIncome();
    }, [])
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featruedTitle'>Revenue</span>
                <div className='featuredMoneyConatiner'>
                    <span className='featuredMoney'>${income[1]?.total}</span>
                    <span className='featuredMoneyRate'>%{Math.floor(perc)}
                        {perc < 0 ? (
                            <ArrowDownward className='featuredIcon negative' />)
                            : (
                                <ArrowUpward className='featuredIcon' />
                            )
                        }
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featruedTitle'>Sales</span>
                <div className='featuredMoneyConatiner'>
                    <span className='featuredMoney'>$4.477</span>
                    <span className='featuredMoneyRate'>-1.4
                        <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featruedTitle'>Cost</span>
                <div className='featuredMoneyConatiner'>
                    <span className='featuredMoney'>$2.477</span>
                    <span className='featuredMoneyRate'>+5.4
                        <ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo