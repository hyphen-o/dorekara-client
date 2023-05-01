import { FC } from 'react'
import SubmitButton from '../buttons/SubmitButton'
import { styles } from '@/styles/components/forms/AuthForm.style'
import { useForm, SubmitHandler } from 'react-hook-form'
import { authApi } from '@/api/routes/AuthApi'
import { useRouter } from 'next/router'
import InputSong from '../inputs/InputSong'
import Selector from '../inputs/Selector'
import InputKey from '../inputs/InputKey'

type Inputs = {
  title: string
  key: number
}

const SongForm: FC = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await authApi.register(data)
      localStorage.setItem('token', res.data.authorization.token)
      console.log(res)
      router.push('home')
    } catch (error) {
      return error
    }
  }

  return (
    <>
      <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>曲のタイトル</div>
        <InputSong submit={register} label='title' />
        <div>アーティスト</div>
        <Selector text='アーティストを変更'></Selector>
        <div>キー</div>
        <InputKey></InputKey>
        <SubmitButton text='作成' />
      </form>
    </>
  )
}

export default SongForm
