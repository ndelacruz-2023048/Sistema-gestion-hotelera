import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import styled from 'styled-components'

export const CardRoomImagesAdded = ({image,itemNumber,setArrayImages,arrayImages}) => {
    const handleClickDeleteImagePreview = ()=>{
        const nuevoArray = arrayImages.filter((_, index) => index !== itemNumber);
        console.log(nuevoArray);
        setArrayImages(()=>[...nuevoArray])
    }
    
  return (
    <Container>
        <div className='containerImgRoom'>
            <img src={image} alt="" className='imgRoom'/>
        </div>
        <div className='containerTitleRoom'>
            <p className='titleRoom'>Room Preview {itemNumber}</p>
        </div>
        <div className='containerIconRoom'>
            <Icon icon="fluent:delete-20-regular" className='icon' onClick={handleClickDeleteImagePreview}/>
        </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    .containerImgRoom{
        display: flex;
        width: 30%;
        height: 100%;
        width: 30%;
        .imgRoom{
            height: 100%;
            object-fit: cover;
            width: 100%;
            border-radius: 20px;
            border: 2px solid #a88f68;
        }
    }

    .containerTitleRoom{
        display: flex;
        width: 57%;
        .titleRoom{
            font-weight: 600;
            font-size: 14px;
            margin-left: 10px;
            margin: 0;
            color: #bdbdbd;
        }
    }
    .containerIconRoom{
        width: 10%;
        display: flex;
        justify-content: end;
        align-items: start;
        .icon{
            font-size: 20px;
            color: red;
            padding: 5px;
            &:hover{
                cursor: pointer;
                background-color: #ececec;
                border-radius: 8px;
            }
        }
    }
`