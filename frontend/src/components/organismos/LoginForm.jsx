import { useForm } from 'react-hook-form'
import { SectionDataLogin } from '../moleculas/SectionDataLogin'
import { useLogin } from '../../hooks/useLogin'
import styled from 'styled-components'

export const LoginForm = () => {
  const { login } = useLogin()
  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      mode: 'onChange'
    }
  )

  const onSubmit = async(data)=> {
    console.log('a', data);
    await login(data)
    reset()
  }


  return (
      <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <SectionDataLogin
            register={register}
            errors={errors}
          />
      </LoginFormWrapper>
  )
}

const LoginFormWrapper = styled.form`
    position: absolute;
    transform:  translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 30px;
    transition: .3s;
    left: 50%;
`