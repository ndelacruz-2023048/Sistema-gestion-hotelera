import styled from "styled-components"
import { RoomOverview } from "../../moleculas/RoomOverview"
import { Calendar } from "../../moleculas/Calendar"

export const DetailsAndDescriptions = () => {
    return (
        <Wrapper>
        <TopRightBox>
            <Container>
                {/* <Calendar /> */}
            </Container>
        </TopRightBox>
            <Container>
                <RoomOverview />
            </Container>
      </Wrapper>
    )
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgSidebar};
  color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.bgSidebar};
  border-radius: 15px;
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