import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import './Product.css'
import { Link } from 'react-router-dom'

const Container = styled.div`
flex: 1;
min-width: 280px;
margin: 5px;
height: 350px;
display: flex;
justify-content: center;
align-items: center;
background-color: #f5fbfd;
position: relative;
`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`
const Info = styled.div`
width: 100%;
height:100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
display: flex;
align-items: center;
justify-content: center;
z-index: 3;
opacity: 0;
transition: all .5s ease-in-out;
cursor: pointer;
&:hover{
    opacity: 1;
}
`
const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all .5s ease;
cursor: pointer;
&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`
const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <img src={require(`../../Assets/${item.img}`)} alt="abc" className='productImg1' />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product