
import styled from 'styled-components';
import { Icon } from '@iconify/react/dist/iconify.js';

export const Methods = ({ togglePopup, setIsEdit, onEdit, onDelete, eventId }) => {
    const handleEdit = () => {
        setIsEdit(true)
        onEdit()
        togglePopup()
    }

    const handleDelete =() => {
        if( window.confirm('Seguro de querer eliminarlo?')) {
            onDelete(eventId)
        }
    }
    return (
        <Wrapper>
            <Option onClick={handleEdit}>
                <Icon icon="line-md:edit-filled" width="24" height="24" />
                Edit
            </Option>
            <Option onClick={handleDelete}>
                <Icon icon="typcn:delete" width="24" height="24" />
                Delete
            </Option>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    bottom: calc(100% + 10px); /* Se coloca encima del disparador */
    left: 93%;
    top: 282px;
    transform: translateX(-50%);
    background-color: #283542;
    color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 10;
    width: 200px;
    height: 70px;
    text-align: left; /* Alinea el texto a la izquierda */

    &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: -3.5%;
        margin-top: -25%; /* Centra la flecha */
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid #283542;
        border-left: 0;
    }
`;

const Option = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 16px;
    cursor: pointer;
`;