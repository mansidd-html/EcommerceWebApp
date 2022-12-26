import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import Navbar from '../../Components/Navbar/Navbar'
import Announcment from '../../Components/Announcment/Announcment'
import Footer from '../../Components/Footer/Footer'
import { Add, Remove } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import {userRequest} from '../../requestMethod.js';
const KEY = "pk_test_51LVoVZILxjVZKVpAAkBPeRjnPZV1vCl2PZhX47BSl9ZhtzRkNGRIa5T3whonNEpqrUfTerZ16Ys5GyVbcZO7UgSv00VkSFgDCM";
const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`

`
const Toptext = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
`
const Info = styled.div`
flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0;
`
const ProductDetails = styled.div`
flex: 2;
display: flex;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
`
const ProductSize = styled.span`

`
const PriceDetails = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size:24px;
margin: 5px;
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 300;
`
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgrey;
border-radius: 10px;
padding: 20px;
height: 50vh;
`
const SummaryTitle = styled.h1`
font-weight: 200;

`
const SummaryItem = styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && 500};
font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const SummaryButton = styled.button`
width: 100%;
padding:10px;
background-color: black;
color: white;
font-weight: 600;
`
const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    const onToken = (token) => {
        setStripeToken(token)
    }
    useEffect(()=>{
        const makePayment = async()=>{
            try {
                const res = await userRequest.post('/stripe/payment',{
                    tokenId:stripeToken.id,
                    amount:cart.total *100,
                });
                navigate('/success',{data:res.data});
            } catch (error) {
                console.log(error);
            }
        }
       stripeToken && makePayment();
    },[stripeToken,cart.total,navigate]);
    return (
        <Container>
            <Navbar />
            <Announcment />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <Toptext>Shopping Bag(2)</Toptext>
                        <Toptext>WishList(0)</Toptext>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.product.map((prod) => (
                            <Product>
                                <ProductDetails>
                                    <img src={require(`../../Assets/${prod.img}`)} style={{ width: "300px" }} />
                                    <Details>
                                        <ProductName><b>Product: </b>{prod.title}</ProductName>
                                        <ProductId><b>ProductID: </b>{prod._id}</ProductId>
                                        <ProductColor color={prod.color} />
                                        <ProductSize><b>Size: </b>{prod.size}</ProductSize>
                                    </Details>
                                </ProductDetails>
                                <PriceDetails>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>{prod.quantity}</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>$ {prod.price * prod.quantity}</ProductPrice>
                                </PriceDetails>
                            </Product>))}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.2</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.2</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Safari Co."
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100} // cents
                            currency="USD"
                            shippingAddress
                            billingAddress
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <button style={{
                                border: "none",
                                width: 120,
                                borderRadius:5,
                                padding: "20px",
                                backgroundColor:"black",
                                color: "white",
                                fontWeight:"600",
                                cursor: "pointer",
                                alignSelf:"center"
                            }}>
                                CHECKOUT NOW</button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart