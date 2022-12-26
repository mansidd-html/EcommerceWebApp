import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import { style } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
transition: all .3s ease;
&:hover{
    transform: scale(1.1);
}
`
const Center = styled.div`
flex:1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;

`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
`
const Right = styled.div`
flex:1;
padding: 20px;
`
const ContactItem = styled.div` 
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SAFARI.</Logo>
                <Desc>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> 600 Alberto path, South-wales 91134
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +1 234 99 12
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/> Contact@safari.dev
                </ContactItem>
                <img src='https://i.ibb.co/Qfvn4z6/payment.png' alt='' style={{width:"50%"}}/>
            </Right>
        </Container>
    )
}

export default Footer