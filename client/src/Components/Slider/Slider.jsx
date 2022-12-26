import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import { style } from '@mui/system'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import Sliderimg1 from '../../Images/black-sleevless-2-free-img.jpg';
import { sliderItems } from '../../data'
import './Slider.css'

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
opacity: 0.7;
z-index: 2;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${(props) => props.slideIndex * -100}vw);
transition: all ease-in-out .5s;
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
height: 100%;
flex: 1;
`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`
const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [inter, setInter] = useState(true);
    useEffect(() => {
        inter && setTimeout(() => {
            setSlideIndex(slideIndex === 3 ? 0 : slideIndex + 1);
        }, 5000);
    }, [slideIndex])
    const handleClick = (direction) => {
        setInter(false);
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
        }
        else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>

                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <img src={require(`../../Assets/${item.img}`)} alt="" className='sliderImg' />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIosOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider