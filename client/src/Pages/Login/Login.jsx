import React, { useState } from 'react'
import styled from 'styled-components';
import { login } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #ebdb2f;
background-image: url("https://www.transparenttextures.com/patterns/batthern.png");
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 20%;
padding: 20px;
background-color: white;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
margin: 20px 10px 0 0;
padding: 10px;

`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
margin: 15px 0 10px 0 ;
background-color: teal;
color: white;
cursor: pointer;
&:disabled{
    color: green;
    cursor: not-allowed;
}
`
const Error = styled.span`
color: red;
`
const Link = styled.a`
margin: 5px 0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching,error} = useSelector((state)=>state.user);
    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Enter Username" onChange={e => setUsername(e.target.value)} />
                    <Input placeholder="Enter Password" type="password" onChange={e => setPassword(e.target.value)} />
                    <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Something went wrong</Error>}
                    <Link>FORGOT PASSWORD</Link>
                    <Link>CREATE AN ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login