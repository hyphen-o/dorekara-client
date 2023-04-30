
import { songApi } from '@/api/routes/SongApi'
import CreateButton from '@/components/buttons/CreateButton'
import SquareButton from '@/components/buttons/SquareButton'
import { createGetAppLayout } from '@/components/layouts/AppLayout'
import Title from '@/components/texts/Title'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { setSong } from '@/redux/slices/songSlice'
import { styles } from '@/styles/pages/Songs.style'
import { authUtils } from '@/utils/authUtils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Index: NextPageWithLayout = () => {

  const router = useRouter()
  const songs = useSelector(state => state.song.song)
  const dispatch = useDispatch()

  useEffect(() => {
    (
      async () => {
        const user = await authUtils.isAuthenticated()
        if (!user) router.push('login')
        const res = await songApi.getAll(user.id)
        console.log(res.data[0])
        dispatch(setSong(res.data[0]))
      }
    )()
  }, [])

  return (
    <>
      <div css={styles.wrapper}>
        <Title title='曲一覧'></Title>
        {
          songs.map((song) => {
            return (
              <>
                <SquareButton id={song.id} text={song.name} song_key={song.key} isEditable={true}></SquareButton>
              </>
            )
          })
        }
        <CreateButton></CreateButton>
      </div>
    </>
  )
}

Index.getLayout = createGetAppLayout()

export default Index
