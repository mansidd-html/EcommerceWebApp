import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PopularProducts } from '../../data';
import Product from '../Product/Product';
import axios from 'axios';
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 10px;
position: relative;
`
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  ////////////////////////////////////
  useEffect(() => {
    const getProducts = async () => {
      try {
        let res;
        if (cat) {
          res = await axios.get(`http://localhost:5000/api/products?category=${cat}`);
        }
        else {
          res = await axios.get("http://localhost:5000/api/products");
        }
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [cat]);
  //////////////////////////////////////
  useEffect(() => {
    cat && setFilterProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [cat, filters, products]);
  ////////////////////////////////////
  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
    else if (sort === "asc") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }
    else {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort])
  return (
    <Container>
      {cat ? filterProducts.map((item) => (
        <Product item={item} key={item.id} />
      )) : products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products