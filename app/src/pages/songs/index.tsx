import { songApi } from '@/api/routes/SongApi'
import CreateButton from '@/components/buttons/CreateButton'
import SongsButton from '@/components/buttons/squarebuttons/SongsButton'
import { createGetAppLayout } from '@/components/layouts/AppLayout'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { setSong } from '@/redux/slices/songSlice'
import { SongState } from '@/redux/types/songSlice.type'
import { styles } from '@/styles/pages/Songs.style'
import { authUtils } from '@/utils/authUtils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Index: NextPageWithLayout = () => {
  const router = useRouter()
  const songs = useSelector((state: SongState) => state.song.value)
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      const user = await authUtils.isAuthenticated()
      if (!user) router.push('login')
      const res = await songApi.getAll(user.id)
      console.log(res.data[0])
      dispatch(setSong(res.data[0]))
    })()
  }, [])

  return (
    <>
      <div css={styles.wrapper}>
        {songs.map((song) => {
          return (
            <>
              <SongsButton song={song} />
            </>
          )
        })}
        <CreateButton />
      </div>
    </>
  )
}

Index.getLayout = createGetAppLayout({isHome: false, label: "楽曲一覧"})

export default Index
