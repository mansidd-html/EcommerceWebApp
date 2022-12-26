import React from 'react'
import './Category.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const  Container = styled.div `
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Info = styled.div `
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1 `
color: #ffe7e7;
margin-bottom: 20px;

`
const Button = styled.button `
border: none;
padding: 10px;
background-color: #ffe7e7;
color: grey;
cursor: pointer;
font-weight: 600;
`
const CategoryItem = ({item}) => {
  return (
    <Container>
    <Link to={`/products/${item.cat}`}>
        <img src={require(`../../Assets/${item.img}`)} alt="" className='categoryItemImg'/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Link>
    </Container>
  )
}

export default CategoryItem