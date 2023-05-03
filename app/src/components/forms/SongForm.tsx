import { FC, useEffect, useState } from 'react'
import SubmitButton from '../buttons/SubmitButton'
import { styles } from '@/styles/components/forms/AuthForm.style'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import InputSong from '../inputs/InputSong'
import Selector from '../inputs/Selector'
import InputKey from '../inputs/InputKey'
import Error from '../texts/Error'
import { SongFormValues } from '../types/SongForm.type'
import { songApi } from '@/api/routes/SongApi'
import { useSelector } from 'react-redux'
import { UserState } from '@/redux/types/userSlice.type'

type Props = {
  id?: number
}

type SongState = {
  name: string
  artist_id?: number
  key: number
}

const SongForm: FC<Props> = ({ id }) => {
  const router = useRouter()
  const user = useSelector((state: UserState) => state.user.value)

  const [song, setSong] = useState<SongState>({
    name: '',
    artist_id: 0,
    key: 0,
  })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SongFormValues>()

  useEffect(() => {
    if (id) {
      ;(async () => {
        const res = await songApi.getOne(id)
        setSong(res.data[0])
      })()
      setValue('name', song.name)
      setValue('artist_id', song.artist_id)
      setValue('key', song.key)
    }
  }, [])

  const onSubmit: SubmitHandler<SongFormValues> = async (data) => {
    try {
      //曲のidが存在したら編集，存在しなかったら作成APIを叩く
      if (id) {
        songApi.edit(user.id, { ...data, song_id: id })
      } else {
        songApi.create(user.id, data)
      }
      router.back()
    } catch (error) {
      return error
    }
  }

  return (
    <>
      <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>曲のタイトル</div>
        <InputSong submit={register} label='name' value={song.name} />
        {errors.name?.type === 'required' && (
          <Error>曲のタイトルは必ず入力してください</Error>
        )}
        {errors.name?.type === 'maxLength' && (
          <Error>曲のタイトルは8文字以内で入力して下さい</Error>
        )}
        <div>アーティスト</div>
        <Selector
          submit={register}
          text='アーティストを変更'
          value={song.artist_id}
        ></Selector>
        <div>キー</div>
        <InputKey submit={register} value={song.key}></InputKey>
        <SubmitButton text={id ? '更新' : '作成'} />
      </form>
    </>
  )
}

export default SongForm
