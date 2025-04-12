import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"
import Room from '../../../assets/Room.jpg'
export const HotelCard = () => {
    return (
        <Container>
            <WrapperCard>
                <Card>
                    <ContainerImage>
                        <ContainerIconLove>
                            <Icon icon="ic:outline-favorite-border" className="iconoFavorite"/>
                        </ContainerIconLove>
                        <ContainerIconeStar>
                            <Icon icon="uis:favorite" className="iconoStar"/><br /><p className="p">4,44</p>
                        </ContainerIconeStar>
                        <Imagen src={Room}/>
                    </ContainerImage>
                    <ContainerSection>
                        <Section1>
                            <Title>Individual Moderno House </Title>
                            <Description>1903 St, LaSanta Alley, 21</Description> 
                        </Section1>
                        <Section2>
                            <Price>$ 1,099</Price>
                            <Total>Total</Total>
                        </Section2>
                    </ContainerSection>
                </Card>
            </WrapperCard>
        </Container>
    ) 
}

const Container = styled.div`
   border-radius: 30px;
   background-color: ${({theme})=>theme.colorBackground};
   display: flex;
   justify-content: center;
   align-items: center;
   width:32%;
   height: 330px;
`
const WrapperCard = styled.div`
    display: flex;
    justify-content:center;
    margin:auto;
    width: 95%;
    height: 95%;
`
    
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
    border-radius: 30px;
    width: 100%;
    height: 100%;
`

const ContainerSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 97%;
    margin: auto;
    height: 18%;
    `

const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

const Section2 = styled.div`
    display: flex;
    align-items: end;
    gap: 3px;
`
const Title= styled.h2`
    color:${({theme})=>theme.color};
    /* position: absolute; */
    font-size: 20px;
    top: 77%;
    left: 4%;
    margin: 0;
`

const Description = styled.p`
    color:${({theme})=>theme.hotelcard};
    /* position: absolute; */
    font-size: 15px;
    top: 85%;
    left: 4%;
    margin: 0;
`

const Price = styled.p`
    color:${({theme})=>theme.color};
    /* position: absolute; */
    font-size: 18.5px;
    top: 85%;
    right: 13%;
    margin: 0;
`

const Total = styled.p`
    color:${({theme})=>theme.hotelcard};
    /* position: absolute; */
    font-size: 14px;
    top: 87%;
    right: 6%;
    margin: 0;
`

const ContainerImage = styled.div`
    position: relative;
    width:100%;
    height:73%;
`

const Imagen = styled.img`
    width:100%;
    height:100%;
    border-radius: 20px;
`

const ContainerIconLove = styled.div`
    position: absolute;
    top: 2%;
    left: 2%;
    width: 60px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.2); /* borde para resaltar */

    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }

    .iconoFavorite {
        font-size: 24px;
        color: white;
        transition: all 0.3s ease;
    }

    &:hover .iconoFavorite {
        color: #333;
    }
`

const ContainerIconeStar = styled.div`
    position: absolute;
    top: 2%;
    right: 2%;
    width: 75px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border-radius: 47%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }

    .iconoStar {
        font-size: 24px;
        color: white;
        transition: all 0.3s ease;
    }

    &:hover .iconoStar {
        color: #333;
    }
    
    &:hover .p {
        color: #333;
    }
`
