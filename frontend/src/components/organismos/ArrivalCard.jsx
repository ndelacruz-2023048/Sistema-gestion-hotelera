import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Icon } from "@iconify/react"
import { useHotelStore } from '../../store/HotelStore'

export const ArrivalCard = ({ title, data }) => {
  const { updateHotel, fetchHotels } = useHotelStore()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(data)
  const [imageUrl, setImageUrl] = useState(null)

  // Inicializa formData y el link de imagen
  useEffect(() => {
    setFormData(data)
    setImageUrl(data.image || null)
  }, [data])

  // Escucha constantemente cambios en el campo "image"
  useEffect(() => {
    if (formData?.image) {
      setImageUrl(formData.image)
    } else {
      setImageUrl(null)
    }
  }, [formData?.image])

  const handleChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleUpdate = async () => {
    const result = await updateHotel(formData._id, formData)
    if (result?.success) {
      setIsEditing(false)
      await fetchHotels()
    }
  }

  const handleCancel = () => {
    setFormData(data)
    setIsEditing(false)
    setImageUrl(data.image || null)
  }

  return (
    <Card>
      <TopRow>
        <RightActions>
          {isEditing ? (
            <>
              <ActionButton onClick={handleUpdate}>Update</ActionButton>
              <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
            </>
          ) : (
            <Icon 
              icon="mdi:edit-outline" 
              className='Icon' 
              onClick={() => setIsEditing(true)} 
              style={{ cursor: 'pointer' }}
            />
          )}
        </RightActions>
      </TopRow>

      <Title>{title}</Title>
      <Bar />

      <Details>
        {Object.entries(formData)
          .filter(([key]) => key !== '_id' && key !== '__v')
          .map(([key, value]) => (
            <FieldWrapper key={key}>
              <Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
              <Input
                type="text"
                value={
                  typeof value === 'object'
                    ? value?.$numberDecimal || JSON.stringify(value)
                    : value
                }
                readOnly={!isEditing}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </FieldWrapper>
          ))}
      </Details>

      {imageUrl && (
        <ImagePreviewWrapper>
          <ImagePreview
            src={imageUrl}
            alt="Vista previa"
            onError={(e) => (e.target.style.display = 'none')}
          />
        </ImagePreviewWrapper>
      )}

      <Status>Hotel {isEditing ? "en edición" : "seleccionado"}</Status>
    </Card>
  )
}


const Card = styled.div`
  background-color: ${({ theme }) => theme.colorBackground};
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const TopRow = styled.div`
  display: flex;
  justify-content: flex-end;
`

const RightActions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .Icon {
    font-size: 23px;
    color: #888;
    padding: 4px;
    cursor: pointer;
    border: solid 0.3px rgb(190, 190, 190);
    border-radius: 5px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(0.85);
    }
  }
`

const Title = styled.h3`
  margin: 0.5rem 0 0.2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color};
`

const Bar = styled.div`
  width: 100%;
  height: 1px;
  margin: 0.3rem 0;
  background-color: #888;
`

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 8px;
`

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Label = styled.label`
  font-size: 14px;
  color: #888;
`

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.color};
  background-color: transparent;
`

const Status = styled.span`
  font-size: 0.85rem;
  color: green;
  margin-top: 0.5rem;
`

const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colorBackground};
  color: ${({ theme }) => theme.infoText};
  border: solid 0.5px ${({ theme }) => theme.infoText};
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.infoText};
    color: ${({ theme }) => theme.colorBackground};
    transition: 0.5s;
  }
`

const CancelButton = styled.button`
  background-color: ${({ theme }) => theme.colorBackground};
  color: #ff4444;
  border: solid 0.5px #ff4444;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ff4444;
    color: ${({ theme }) => theme.colorBackground};
    transition: 0.5s;
  }
`
const ImagePreviewWrapper = styled.div`
  margin-top: 1rem;
  text-align: center;
`

const ImagePreview = styled.img`
  max-height: 200px;
  max-width: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`