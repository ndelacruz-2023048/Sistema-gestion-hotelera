import { styled } from 'styled-components'
import { RiArrowDownSLine } from "@remixicon/react"

export const DropdownWrapper = styled.div`
    position: relative;
    display: inline-block;
    background: #1e1e2f;
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
    width: 180px;
    height: 30px;
`

export const DropdownHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DropdownContent = styled.div`
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    background: rgba(44, 44, 62, 0.8);
    border-radius: 8px;
    overflow: hidden;
    display: ${({ open }) => (open ? "block" : "none")};
`

export const DropdownItem = styled.div`
    padding: 10px;
    color: white;
    cursor: pointer;
    &:hover {
        background: #3d3d5c;
    }
`

export const StyledArrow = styled(RiArrowDownSLine)`
    margin-left: 8px;
    color: #474d61;
    transition: transform 0.2s ease; /* Animación suave */
    transform: ${props => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`