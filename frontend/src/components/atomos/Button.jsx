import { StyledButton } from "../../styles/ButtonStyles.jsx"

export const Button = ({ label, active, onClick }) => {
    return (
        <StyledButton $active={active} onClick={onClick}>
            {label}
        </StyledButton>
    )
}