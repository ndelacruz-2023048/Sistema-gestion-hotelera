import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"
import Room from '../../../assets/Room.jpg'
export const HotelCard = ({urlSebas}) => {
    return (
        <Container>
            <Card>
                <ContainerImage>
                    <ContainerIconLove>
                        <Icon icon="ic:outline-favorite-border" className="iconoFavorite"/>
                    </ContainerIconLove>
                    <Imagen src={Room}/>
                </ContainerImage>
                <Title>Rooms</Title>
                <Icon icon={urlSebas}/>
                <p>Here you can find your intrestings Rooms</p>
            </Card>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 50px;
    padding: 25px;
`
const Card = styled.div`
    width: 525px;
    height: 370px;
    border: 2px solid #333;
    padding: 10px;
    background-color: ${({theme})=>theme.colorBackground};
    border-radius: 20px;
`
const Title= styled.h2`
    color:${({theme})=>theme.atributoSebas};
`
const ContainerImage = styled.div`
    position:relative;
    width:100%;
    height:50%;
`

const Imagen = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:20px;
`

const ContainerIconLove = styled.div`
    position:absolute;
    height:50px;
    width:30px;
    top:5%;
    left:5%;
    .iconoFavorite{
        font-size:100px;
    }
`

