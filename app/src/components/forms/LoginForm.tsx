import { FC, useState } from 'react'
import SubmitButton from '../buttons/SubmitButton'
import { styles } from '@/styles/components/forms/AuthForm.style'
import { useForm, SubmitHandler } from 'react-hook-form'
import Error from '../texts/Error'
import InputAuth from '../inputs/InputAuth'
import { authApi } from '@/api/routes/AuthApi'
import { useRouter } from 'next/router'

type Inputs = {
  name: string
  password: string
}

const LoginForm: FC = () => {
  const router = useRouter()
  const [errorMsg, setErrorMsg] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await authApi.login(data)
      localStorage.setItem('token', res.data.authorization.token)
      router.push('home')
    } catch (e) {
      setErrorMsg(e.response.data.error.msg)
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
        <Error>{errorMsg}</Error>

        <SubmitButton text='ログイン' />
      </form>
    </>
  )
}

export default LoginForm
