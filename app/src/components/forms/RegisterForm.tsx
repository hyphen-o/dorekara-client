import { FC } from 'react'
import SubmitButton from '../buttons/SubmitButton'
import { styles } from '@/styles/components/forms/AuthForm.style'
import { useForm, SubmitHandler } from 'react-hook-form'
import Error from '../texts/Error'
import InputAuth from '../inputs/InputAuth'
import { authApi } from '@/api/routes/AuthApi'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setUser } from '@/redux/slices/userSlice'

type Inputs = {
  name: string
  password: string
  confirmPassword?: string
}

const RegisterForm: FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await authApi.register(data)
      localStorage.setItem('token', res.data.authorization.token)
      if (res.data.user) {
        dispatch(setUser(res.data.user))
      }
      console.log(res)
      router.push('home')
    } catch (error) {
      return error
    }
  }

  return (
    <>
      <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputAuth submit={register} label='name' />
        {errors.name?.type === 'required' && (
          <Error>ユーザ名を入力してください</Error>
        )}
        {errors.name?.type === 'minLength' && (
          <Error>ユーザ名は4文字以上必要です</Error>
        )}

        <InputAuth submit={register} label='password' />
        {errors.password?.type === 'required' && (
          <Error>パスワードを入力してください</Error>
        )}
        {errors.password?.type == 'minLength' && (
          <Error>パスワードは8文字以上必要です</Error>
        )}

        <InputAuth
          submit={register}
          label='confirmPassword'
          confirm={getValues('password')}
        />
        {errors.confirmPassword && <Error>パスワードと一致しません</Error>}

        <SubmitButton text='新規登録' />
      </form>
    </>
  )
}

export default RegisterForm
