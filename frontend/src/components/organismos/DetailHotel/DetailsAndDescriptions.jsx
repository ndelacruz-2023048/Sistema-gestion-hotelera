import styled from "styled-components"
import { RoomOverview } from "../../moleculas/RoomOverview"
import { Calendar } from "../../moleculas/Calendar"

export const DetailsAndDescriptions = () => {
    return (
        <Wrapper>
        <TopRightBox>
            <Container>
                <Calendar />
            </Container>
        </TopRightBox>
            <Container>
                <RoomOverview />
            </Container>
      </Wrapper>
    )
}

const Container = styled.div`
  flex: 2;
  background-color: ${({ theme }) => theme.bgSidebar};
  color: white;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Wrapper = styled.div`
  position: relative;
  width: 95%;
  height: 100%;
  background-color: ${({ theme }) => theme.bgSidebar};
  border-radius: 15px;
  padding: 20px;
`

const TopRightBox = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.bgCard};
  padding: 10px;
  border-radius: 10px;
  z-index: 2;
`