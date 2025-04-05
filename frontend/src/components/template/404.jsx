import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router"
import pinguino404 from '../../assets/pinguino404.png'
export default function PageNotFound() {
  return (
    <Container>
      <Circle1></Circle1>
      <Circle2></Circle2>
      <Circle3></Circle3>
      <Title>404</Title>
      <Subtitle>Page not found...</Subtitle>
      <Paragraph>Sorry, we didn't find this page.<br />
        Try to decide for yourself or <br/>
        write to our support team
      </Paragraph>
      <ContainerButtons>
        <NavLink to="/">
          <Button1>Back</Button1>
        </NavLink>
        <NavLink to="/">
          <Button2>Home</Button2>
        </NavLink>
      </ContainerButtons>
      <Image src={pinguino404} alt="404" />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #fff6ec;
  overflow: hidden;
`

const Circle1 = styled.div`
  background:radial-gradient(circle at 50% 50%, #775e52 0%, #9b7b6d 27%, #fff6ec 70%, transparent 100%);
  position: absolute;
  width: 900px;
  height: 900px;
  top: -30%;
  left: -16%;
`
const Circle2 = styled.div`
  background:radial-gradient(circle at 50% 50%, #e0bb9a 0%, #e0bb9a 44%, #fff6ec 70%, transparent 100%);
  position: absolute;
  width: 1100px;
  height: 1100px;
  top: -8%;
  left: 49%;
`
const Circle3 = styled.div`
  background:radial-gradient(circle at 50% 50%, #e0bb9a 0%, #e7c3a5 20%, #fff6ec 70%, transparent 100%);
  position: absolute;
  width: 500px;
  height: 500px;
  top: 67%;
  left: -5%;
`

const Title = styled.h1`
  position: absolute;
  font-size: 145px;
  top: 20%;
  color: #32140c;
  left: 13%;
`

const Subtitle = styled.h2`
  font-size: 50px;
  position: absolute;
  top: 45%;
  left: 13%;
  font-weight: 400;
`

const Paragraph = styled.p`
  font-size: 30px;
  position: absolute;
  font-weight: 400;
  top: 54%;
  left: 13%;
  line-height: 1.5;
  letter-spacing: 2px;
`

const ContainerButtons = styled.div`
  display: flex;
  gap: 70px;
  position: absolute;
  top: 75%;
  left: 13%;
`
  
const Button1 = styled.a`
  background-color: #ffffff;
  color: #32140e;
  padding: 10px 60px;
  border-radius: 15px;
  font-size: 25px;
  font-weight: 400;
  border: 2px solid #32140e;
`
const Button2 = styled.a`
  background-color: #32140e;
  color: #fff;
  padding: 10px 60px;
  border-radius: 15px;
  font-size: 25px;
  font-weight: 400;
`

const Image = styled.img`
  width: 35%;
  height: 70%;
  position: absolute;
  top: 20%;
  right:10%
`