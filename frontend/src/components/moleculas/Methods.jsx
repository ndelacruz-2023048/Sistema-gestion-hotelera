
import styled from 'styled-components';
import { Icon } from '@iconify/react/dist/iconify.js';
import Swal from 'sweetalert2';

// Definir el mixin de SweetAlert2 fuera del componente para reutilizarlo
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'custom-confirm-button',
        cancelButton: 'custom-cancel-button',
    },
    buttonsStyling: false
});

export const Methods = ({ togglePopup, setIsEdit, onEdit, onDelete, eventId }) => {
    const handleEdit = () => {
        setIsEdit(true);
        onEdit();
        togglePopup();
    };

    const handleDelete = () => {
        // Reemplazar window.confirm con SweetAlert2
        swalWithBootstrapButtons
        .fire({
            title: '¿Estás seguro?',
            text: '¡No podrás revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true,
        })
        .then((result) => {
            if (result.isConfirmed) {
            // Llamar a la función onDelete con el eventId
            onDelete(eventId);
            swalWithBootstrapButtons.fire({
                title: '¡Eliminado!',
                text: 'Tu archivo ha sido eliminado.',
                icon: 'success',
            });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
                title: 'Cancelado',
                text: 'Tu archivo está seguro :)',
                icon: 'error',
            });
            }
        });
    };

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
    );
};
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
    .custom-confirm-button {
        background-color: #28a745;
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        margin: 0 5px;
        transition: background-color 0.2s;

        &:hover {
        background-color: #218838;
        }
    }

    .custom-cancel-button {
        background-color: #dc3545;
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        margin: 0 5px;
        transition: background-color 0.2s;

        &:hover {
        background-color: #c82333;
        }
    }
`;

const Option = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 16px;
    cursor: pointer;
`;
