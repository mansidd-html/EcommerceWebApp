import React from 'react'
import Announcment from '../../Components/Announcment/Announcment'
import Categories from '../../Components/Categories/Categories'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Products from '../../Components/Products/Products'
import Slider from '../../Components/Slider/Slider'
import './Home.css'
const Home = () => {
  return (
    <div>
      <Announcment />
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home