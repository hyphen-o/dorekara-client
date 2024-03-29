import { FC, useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { KaraokeFormValues } from '../types/Form.type'
import Dorekana from '../images/Dorekana'
import Selector from '../inputs/Selector'
import RoundButton from '../buttons/roundbuttons/RoundButton'
import { styles } from '@/styles/components/forms/KaraokeForm.style'
import { Song } from '@/redux/types/songSlice.type'
import { useRouter } from 'next/router'
import { historyApi } from '@/api/routes/HistoriesApi'
import { artistApi } from '@/api/routes/ArtistApi'
import NoteIcon from '@/components/icons/NoteIcon'
import { authUtils } from '@/utils/authUtils'
import { authApi } from '@/api/routes/AuthApi'

const KaraokeForm: FC = () => {
  const router = useRouter()
  const [userId, setUserId] = useState()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [song, setSong] = useState<Song>({
    id: null,
    name: null,
    artist_id: null,
    key: null,
  })
  const [artist, setArtist] = useState<string>()

  const { register, handleSubmit } = useForm<KaraokeFormValues>()

  useEffect(() => {
    try {
      ;(async () => {
        //ユーザがログイン状態か確認
        const user = await authUtils.isAuthenticated()
        if (!user) router.push('/login')
        else {
          const res = await authApi.me(localStorage.getItem('token'))
          setUserId(res.data.user.id)
        }
      })()
    } catch (error) {
      router.push('/login')
    }
  }, [])

  //ローカルストレージの曲を削除
  const deleteLocalSongs = (): void => {
    localStorage.removeItem('songs')
  }

  //文字列の長さから文字サイズを出力
  const calculateSize = (text: string): string => {
    if(text.length <= 8) {
      return 'st'
    } else if (text.length <= 13) {
      return 'md' 
    } else {
      return 'lg'
    }
  }

  const onSubmit: SubmitHandler<KaraokeFormValues> = async (data) => {
    try {
      //ローカルストレージに存在する曲を取得する
      const songs = JSON.parse(localStorage.getItem('songs'))[0]
      //アーティストに指定があれば曲をフィルタリングする
      const filtered_songs = songs.filter((song) => {
        if (data.artist_id) return song.artist_id == data.artist_id
        else return song
      })

      //曲がこれ以上ない場合にアラートを出す
      if (!songs.length) {
        alert('曲がもうありません！カラオケを終了します.')
        deleteLocalSongs()
        router.push('home')
        return
      }

      //条件に合う曲がこれ以上ない場合にアラートを出す
      if (!filtered_songs.length) {
        alert('条件に合う曲がもうありません！')
        return
      }

      //ランダムなインデックスを生成し，曲を選ぶ
      const random_index = Math.floor(Math.random() * filtered_songs.length)
      const random_song = filtered_songs[random_index]
      setSong(random_song)

      //アーティスト名を取得する
      if (random_song.artist_id) {
        const res = await artistApi.getOne(random_song.artist_id)
        console.log(res.data)

        setArtist(res.data[0].name)
      } else {
        setArtist('アーティスト設定なし')
      }

      //カラオケ履歴に曲を追加
      await historyApi.create(userId, { song_id: random_song.id })

      //ローカルの曲からランダムに選んだ曲を取り除く
      const new_songs = songs.filter((song) => song.id != random_song.id)
      localStorage.setItem('songs', JSON.stringify([new_songs]))

      setIsOpen(true)
    } catch (error) {
      alert('選曲できませんでした')
    }
  }

  const handleRoundButtonClick = (): void => {
    deleteLocalSongs()
    router.push('home')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} css={styles.form}>
        {!isOpen && <div css={styles.text('st')}>TAP!</div>}
        <div css={styles.songNameWrapper}>
          {isOpen && <NoteIcon />}
          {song.name && <div css={styles.text(calculateSize(song.name))}>{isOpen && song.name}</div>}
        </div>
        <div css={styles.artist}>{isOpen && artist}</div>
        <div css={styles.key}>{isOpen && song.key && song.key}</div>

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
