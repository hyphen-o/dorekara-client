import { FC } from 'react'
import { styles } from '@/styles/components/forms/ArtistForm.style'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import Error from '../texts/Error'
import { ArtistFormValues } from '../types/Form.type'
import { useSelector } from 'react-redux'
import { UserState } from '@/redux/types/userSlice.type'
import AddButton from '../buttons/AddButton'
import { artistApi } from '@/api/routes/ArtistApi'
import InputArtist from '../inputs/InputArtist'

const ArtistForm: FC = () => {
  const router = useRouter()
  const user = useSelector((state: UserState) => state.user.value)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArtistFormValues>()

  const onSubmit: SubmitHandler<ArtistFormValues> = async (data) => {
    try {
      await artistApi.create(user.id, data)
      router.reload()
    } catch (error) {
      return error
    }
  }

  return (
    <>
      <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputArtist submit={register} label='name' />
        <AddButton />
      </form>
      {errors.name?.type === 'required' && (
        <Error>アーティスト名は必ず入力してください</Error>
      )}
    </>
  )
}

export default ArtistForm
