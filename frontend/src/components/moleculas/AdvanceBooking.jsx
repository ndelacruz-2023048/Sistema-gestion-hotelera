import styled from "styled-components"
import { Icon } from "@iconify/react"

export const BookingCard = ({ name, date, icon = "ph:hand-swipe-right" }) => {
  return (
    <Card>
      <Avatar>
        <Icon icon={icon} className="avatar-icon" />
      </Avatar>
      <Info>
        <strong>{name}</strong>
        <small>{date}</small>
      </Info>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.bgSidebar};
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.05);
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.activeIconBorderSidebar};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  .avatar-icon {
    font-size: 22px;
    color: ${({ theme }) => theme.color};
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  strong {
    font-size: 14px;
    color: ${({ theme }) => theme.color};
  }
  small {
    font-size: 12px;
    color: ${({ theme }) => theme.textSecondary};
  }
`
