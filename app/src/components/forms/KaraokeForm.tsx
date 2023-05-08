import { FC, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { KaraokeFormValues } from '../types/Form.type'
import Dorekana from '../images/Dorekana'
import Selector from '../inputs/Selector'
import RoundButton from '../buttons/roundbuttons/RoundButton'
import { styles } from '@/styles/components/forms/KaraokeForm.style'
import { Song } from '@/redux/types/songSlice.type'
import { useRouter } from 'next/router'
import { historyApi } from '@/api/routes/HistoriesApi'
import { useSelector } from 'react-redux'
import { UserState } from '@/redux/types/userSlice.type'

const KaraokeForm: FC = () => {
  const router = useRouter()
  const user = useSelector((state: UserState) => state.user.value)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [song, setSong] = useState<Song>({
    id: null,
    name: null,
    artist_id: null,
    key: null
  })

  const { register, handleSubmit } = useForm<KaraokeFormValues>()

  //ローカルストレージの曲を削除
  const deleteLocalSongs = (): void => {
    localStorage.removeItem('songs')
  }

  const onSubmit: SubmitHandler<KaraokeFormValues> = async (data) => {
    try {
      //ローカルストレージに存在する曲を取得する
      const songs = JSON.parse(localStorage.getItem('songs'))[0]
      //アーティストに指定があれば曲をフィルタリングする
      const filtered_songs = songs.filter(song => {
        if(data.artist_id) return song.artist_id == data.artist_id
        else return song
      })

      //曲がこれ以上ない場合にアラートを出す
      if(!songs.length) {
        alert('曲がもうありません！カラオケを終了します.')
        deleteLocalSongs()
        router.push('home')
        return
      }
      
      //条件に合う曲がこれ以上ない場合にアラートを出す
      if(!filtered_songs.length) {
        alert('条件に合う曲がもうありません！')
        return
      }

      //ランダムなインデックスを生成し，曲を選ぶ
      const random_index = Math.floor(Math.random() * filtered_songs.length)
      const random_song = filtered_songs[random_index]
      setSong(random_song)

      //カラオケ履歴に曲を追加
      await historyApi.create(user.id, {song_id: random_song.id})

      //ローカルの曲からランダムに選んだ曲を取り除く
      const new_songs = songs.filter((song) => song.id != random_song.id)
      localStorage.setItem('songs', JSON.stringify([new_songs]))

      setIsOpen(true)
    } catch (error) {
      return error
    }
  }

  const handleRoundButtonClick = (): void => {
    deleteLocalSongs()
    router.push('home')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} css={styles.form}>
        <div css={styles.text}>
          {
            isOpen ? song.name : 'TAP!'
          }
        </div>
        <div>
          {
            isOpen && song.artist_id
          }
        </div>
        <Dorekana isOpen={isOpen}></Dorekana>
        {!isOpen && (
          <Selector
            submit={register}
            text='次に歌う曲のアーティスト'
          ></Selector>
        )}
      </form>
      {!isOpen && (
        <RoundButton
          theme='red'
          text='カラオケ終了！'
          handleButtonClick={handleRoundButtonClick}
        ></RoundButton>
      )}
      {isOpen && (
        <RoundButton
          theme='red'
          text='次の曲！'
          handleButtonClick={() => setIsOpen(false)}
        ></RoundButton>
      )}
    </>
  )
}

export default KaraokeForm
