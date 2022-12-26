import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Announcment from '../../Components/Announcment/Announcment'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'
import styled from 'styled-components'
import './Product.css'
import { Add, Remove } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../../requestMethod';
import axios from 'axios'
import { addProduct } from '../../redux/cartRedux'
import { useDispatch } from 'react-redux'
const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImageContainer = styled.div`
flex: 1;
`
const InfoContainer = styled.div`
flex: 1;
padding: 0 50px;
`
const Title = styled.h1`
font-weight: 200;

`
const Desc = styled.p`
margin: 20px 0;
`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin: 30px 0;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;

`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
justify-content: center;
align-items: center;
margin: 0 5px;
`
const Button = styled.button`
padding: 15px;
border: 3px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
&:hover{
    background-color: #f8f4f4;
}
`;

const Product = () => {
    const location = useLocation();
    const Id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const getSingleProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/find/${Id}`);
                setProduct(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getSingleProduct();
    }, [Id]);
    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        }
        else {
            setQuantity(quantity + 1);
        }
    }
    const handleClick = () => {
        //update cart
        dispatch(
            addProduct({ ...product, quantity, color, size })
        );
    }
    return (
        <Container>
            <Navbar />
            <Announcment />
            <Wrapper>
                <ImageContainer>
                    <img src={product?.img ? require(`../../Assets/${product.img}`) : require('../../Assets/gray-men-shoes-1-free-img.jpg')} alt='' className='productImg2' />
                </ImageContainer>
                <InfoContainer>
                    <Title>{product?.title ? product.title : "Gray shoes"}</Title>
                    <Desc>{product?.desc ? product.desc : "abc"}</Desc>
                    <Price>$ {product?.price ? product.price : 20}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color ? product.color.map((c, i) => (
                                <FilterColor color={c} key={i} onClick={() => setColor(c)} />
                            ))
                                : <><FilterColor color="black" /></>
                            }
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size ? product.size.map((s, i) => (
                                    <FilterSizeOption key={i}>{s}</FilterSizeOption>
                                ))
                                    : <> <FilterSizeOption >small</FilterSizeOption></>
                                }
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove style={{ cursor: "pointer" }} onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add style={{ cursor: "pointer" }} onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
}

export default Product