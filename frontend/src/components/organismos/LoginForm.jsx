import { useForm } from 'react-hook-form'
import { SectionDataLogin } from '../moleculas/SectionDataLogin'
import { useLogin } from '../../hooks/useLogin'
import styled from 'styled-components'

export const LoginForm = () => {
  const { login } = useLogin()
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm()
  /* const form = {
    userLogin: {
        value: '',
        isValid: false,
        showError: false
    },
    password: {
        value: '',
        isValid: false,
        showError: false
    }
  }

  //Hooks
  const [formData, setFormData] = useState(form)
  
  //Variables/Constantes u Objetos/Arrays

  const isSubmitButtonDisabled = !formData.userLogin.isValid || 
                                  !formData.password.isValid
      console.log(isSubmitButtonDisabled);
      

  //Funciones/Manejadores
  const handleSubmit = (e)=> {
    e.preventDefault()
    login(
      formData.userLogin.value,
      formData.password.value
    )
  }
  
  const handleValueChange = (value, field)=> {
    setFormData((prevData)=> (
      {
        ...prevData,
        [field]: {
          ...prevData[field],
          value
        }
      }
    ))
  }
  
  const handleValidateOnBlur = (value, field)=> {
    let isValid = false
    switch (field) {
      case 'userLogin':
          isValid = validateUserLogin(value)
          break;
      case 'password':
          isValid = validatePassword(value)
          break;
      default:
        break;
    }

    setFormData((prevData)=> (
      {
        ...prevData,
        [field]: {
          ...prevData[field],
          isValid,
          showError: !isValid
        }
      }
    ))
  } */
  
  const onSubmit = async(data)=> {
    console.log('a', data);
    await login(data)
    reset()
  }

  const onDisabledBtn = !isValid

  return (
      <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <SectionDataLogin
            register={register}
            errors={errors}
            disabledButton={onDisabledBtn}
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