
import styled from 'styled-components'
import { Controller } from 'react-hook-form'
import Select from 'react-select'
import { useUsers } from '../../hooks/useUsers'

export const SelectUser = ({control, name, rules, error}) => {
    const { users, isLoading, error: errorUsers } = useUsers()
    const options = users.map((user) => ({
        value: user._id,
        label: `${user.name} ${user.surname}`
    }))

    return (
        <Container>
            { isLoading ? (
                <LoadingMessage>Cargando Usuarios...</LoadingMessage>
            ) : errorUsers ? (
                <ErrorMessage>Error al cargar los Usuarios</ErrorMessage>
            ) : (
                <Controller
                    name={name}
                    control={control}
                    rules={rules}
                    render={({ field}) => (
                        <Select
                            {...field}
                            options={options}
                            placeholder="Selecciona un usuario"
                            isClearable
                            onChange={(selectedOption) => field.onChange(selectedOption)}
                            value={field.value}
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    borderColor: error ? 'red' : base.borderColor,
                                }),
                            }}
                        />
                    )}
                />
            )}
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Label = styled.label`
    font-size: 16px;
    font-weight: 500;
`

const ErrorMessage = styled.span`
    color: red;
    font-size: 14px;
`

const LoadingMessage = styled.span`
    font-size: 14px;
    color: gray;
`