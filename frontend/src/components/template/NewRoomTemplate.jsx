import React, { useState } from 'react'
import { LayoutNewRoom } from '../../Layout/LayoutNewRoom'
import { defineStepper } from '@stepperize/react'
import styled from 'styled-components'
import { FormProvider, useForm } from 'react-hook-form'
import { MyStepperRoom } from '../organismos/Room/MyStepperRoom'
import { useRoomStore } from '../../store/RoomsStore'
import { toast } from 'sonner'
import { useSaveImage } from '../../hooks/SaveImage'
import { useNavigate } from 'react-router'
import { ModalSelectHotel } from '../organismos/modal/modalSelectHotel'

export const NewRoomTemplate = () => {
    const [resetKey, setResetKey] = useState(Date.now());
    const {hotelId,createRoom,createRoomDetail,createRoomView,setHotelId,isModalHotelSelectActive,setIsModalHotelSelectActive} = useRoomStore()
    const {registerImage} = useSaveImage()
    const navigate = useNavigate();
    const {useStepper,utils} = defineStepper(
        {
          id: 'step-1',
          title: 'Room',
          description: 'Enter your shipping details',
        },
        {
          id: 'step-2',
          title: 'Room Detail',
          description: 'Complete the creating hotel',
        },
        {
          id: 'step-3',
          title: 'Room View',
          description: 'Complete the creating hotel',
        }
      )
    
      const methods = useStepper()
      const methodsForm = useForm();
      const {handleSubmit,getValues} = methodsForm
      const currentStepIndex = utils.getIndex(methods.current.id)
      
      const validateRooom =(data)=>{
        console.log(data);
        
        methods.next()
      }

      const validateRoomDetail = (data)=>{
        methods.next()
        console.log(data);
      }

      const validateRoomView = (data)=>{
        console.log(data);
        
      }
      
      const onSubmit = async (data) => {
        if(currentStepIndex===0){
          validateRooom(data)
        }else if(currentStepIndex===1){
          validateRoomDetail(data)
        }else if(currentStepIndex===2){
          validateRoomView(data)
        }
      };
        
      const handleClickNextStep = async()=>{
        handleSubmit(onSubmit)()
      }
      
      const validateGoToStep = (data,id)=>{
        methods.goTo(id)
      }

      const handleClickGoToSpecificStep = (id)=>{
        handleSubmit((data)=>validateGoToStep(data,id))()
      }
      const uploadGalleryImage = async(imagesRoom)=>{
        console.log(imagesRoom);
        const galleryImagesList = []
        for (let [index,image]  of imagesRoom.entries()){
          console.log(image.variant1);
          
          const responseImageRoom = registerImage(image.variant1)
          toast.promise(responseImageRoom,{loading:`Uploading Room Preview ${index}`,success:()=>{
            return(
              `Saved Room Preview ${index}`
            )
          }})
          const dataImageRoom = await responseImageRoom
          galleryImagesList.push(dataImageRoom?.responseImage?.secure_url)
        }

        return galleryImagesList
      }

      const handleClickSubmitRoom = async()=>{
        const {nameOfTheRoom,typeRoom,capacity,description,details,roomNumber,galleryRoomImages,sizeRoom,bedType,floorRoom,priceRoom} = getValues()
        
        
        //Room
        const adultsNumber = parseInt(capacity.adults)
        const childrenNumber = parseInt(capacity.childrens)
        const room = {
          hotel:hotelId,
          nameOfTheRoom,
          typeRoom,
          capacity:{adults:adultsNumber,childrens:childrenNumber},
          description
        }
        const responseRoom = createRoom(room)
        toast.promise(responseRoom,{loading:"Saving Room",success:()=>{
          return(
            "Room Saved"
          )
        }})
        const dataResponseRoom = await responseRoom
        //Room Detail
        const idRoomCreated = dataResponseRoom?.data?.room?._id
        
        const roomDetail = {
          room:idRoomCreated,
          roomNumber,
          details
        }
        const responseRoomDetail = createRoomDetail(roomDetail)
        toast.promise(responseRoomDetail,{loading:"Saving Room Detail",success:()=>{
        return(
            "Room Detail Saved"
          )
        }})
        const dataResponseRoomDetail = await responseRoomDetail

        //Room View
        const listImages = await uploadGalleryImage(galleryRoomImages)
        const roomView = {
          room:idRoomCreated,
          squareMeters:parseInt(sizeRoom),
          bedTypes:bedType,
          floor:parseInt(floorRoom),
          images:listImages,
          available:true,
          pricePerNight:parseFloat(priceRoom)
        }

        const responseRoomView = createRoomView(roomView)
        toast.promise(responseRoomView,{loading:"Saving Room Detail",success:()=>{
        navigate("/")
        setHotelId(0)
        return(
            "Room View Saved"
          )
        }})


      }

      const handleClickSaveRoom = ()=>{
        handleSubmit(handleClickSubmitRoom)()
      }
  return (
    <LayoutNewRoom>
      {
        hotelId===0 && <ModalSelectHotel/>
      }
        <Container>
        
            <FormProvider {...methodsForm}>
                <div className='stepsForm'>
                    {
                    methods.all.map((step,index)=>(
                        <div className='stepContainer'>
                        <button 
                            onClick={()=>handleClickGoToSpecificStep(step?.id)} 
                            className={index<=currentStepIndex?'stepContainer_circle active':'stepContainer_circle'}>
                            {index+1}
                        </button>
                        <span className='stepContainer_text'>{step.title}</span>
                        </div>
                    ))
                    }
                </div>


              <MyStepperRoom
                onRestart={() => {
                  methodsForm.reset();
                  methods.goTo("step-1");
                }}
                stepper={methods}
                onSubmit={onSubmit}
              />
                <div className='buttonManagment'>
                  {currentStepIndex===2?(
                    <button className='buttonManagment_prev' onClick={handleClickSaveRoom}>Save</button>
                  ):(
                    <>
                      {/* <button className='buttonManagment_prev' onClick={()=>methods.prev()}>Prev</button> */}
                      <button className='buttonManagment_next' onClick={()=>handleClickNextStep()}>Next</button> 
                    </>
                  )}
                </div>
            </FormProvider>
          </Container>
    </LayoutNewRoom>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .stepsForm{
    display: flex;
    justify-content: center;
    gap: 30px;
    height: 10%;
    .stepContainer{
      display: flex;
      align-items: center;
      gap: 8px;
      &_circle{
        background-color: ${({theme})=>theme.bg};
        border: 2px solid ${({theme})=>theme.toggleIcon};
        color: ${({theme})=>theme.toggleIcon};
        font-weight: 600;
        border-radius: 50%;
        padding: 12px 16px;
        &.active{
          background-color: ${({theme})=>theme.toggleIcon};
          color: ${({theme})=>theme.textCircleStepper};
          font-size: 15px;
        }
      }
      &_text{
        color: ${({theme})=>theme.textStepper};
        font-weight: 600;
      }
    }
  }
  .containerForms{
    height: 80%;
  }
  .buttonManagment{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10%;
    &_prev{
      border:2px solid ${({theme})=>theme.buttonStepperColor1};
      color: ${({theme})=>theme.buttonStepperColor3};
      background-color: ${({theme})=>theme.buttonStepperColor2};
      padding: 8px 35px;
      font-weight: 600;
      font-size: 16px;
      border-radius: 20px;
      &:hover{
        color: white;
        background-color: ${({theme})=>theme.buttonStepperColor1};
      }
    }

    &_next{
      color: white;
      background-color: ${({theme})=>theme.buttonStepperColor1};
      padding: 8px 35px;
      font-weight: 600;
      font-size: 16px;
      border-radius:20px;
      &:hover{
        border:2px solid ${({theme})=>theme.buttonStepperColor1};
      color: ${({theme})=>theme.buttonStepperColor3};
      background-color: ${({theme})=>theme.buttonStepperColor2};
      }
    }
  }
`
