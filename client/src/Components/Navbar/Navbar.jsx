import React from 'react'
import './Navbar.css'
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material';
import { mobile } from '../../responsive.js';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Container = styled.div`
height:60px;
${mobile({ backgroundColor: "red" })}
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items: center;
`
/** Left */
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size:14px ;
cursor: pointer;
`
const SearchContainer = styled.div`
border:0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
outline: none;

`
/**Center */
const Center = styled.div`
flex: 1;
text-align:center;
`
const Logo = styled.h1`
font-weight: bold;
text-transform: uppercase;
`
/**Right */
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`
const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ cursor: "pointer", color: "grey", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to='/' className='link'><Logo>Safari.</Logo></Link>
                </Center>
                <Right>
                    <Link to="/register" className='link'>
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to='/login' className='link'>
                        <MenuItem>LOGIN</MenuItem>
                    </Link>
                    <Link to='/cart' className='link'>
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar