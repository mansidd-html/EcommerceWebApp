import React, { useEffect, useMemo, useState } from 'react'
import Chart from '../../Component/Chart/Chart';
import FeaturedInfo from '../../Component/FeaturedInfo/FeaturedInfo';
import './Home.css';
import { userData } from '../../Dummydata.js';
import WidgetSm from '../../Component/WigetSm/WidgetSm';
import WidgetLG from '../../Component/WigetLG/WidgetLG'
import { userRequest } from '../../requestMethod';
const Home = () => {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats(prev => [...prev, { name: MONTHS[item._id - 1], "Active User": item.total }])
        );
      } catch (error) {
        console.log(error);
      }
    }
    getStats();
  }, [MONTHS])
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLG />
      </div>
    </div>
  )
}

export default Home