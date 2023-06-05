import { historyApi } from '@/api/routes/HistoriesApi'
import HistoriesButton from '@/components/buttons/squarebuttons/HistoriesButton'
import { createGetAppLayout } from '@/components/layouts/AppLayout'
import Title from '@/components/texts/PageTitle'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { setSong } from '@/redux/slices/songSlice'
import { SongState } from '@/redux/types/songSlice.type'
import { styles } from '@/styles/pages/Songs.style'
import { authUtils } from '@/utils/authUtils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Songs: NextPageWithLayout = () => {
  const router = useRouter()
  const title = String(router.query.date)
  const songs = useSelector((state: SongState) => state.song.value)
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      const user = await authUtils.isAuthenticated()
      if (!user) router.push('login')
      const res = await historyApi.getSongs(user.id, { date: title })
      dispatch(setSong(res.data[0]))
    })()
  }, [])

  return (
    <>
      <div css={styles.wrapper}>
        <Title title={title}></Title>
        {songs.map((song) => {
          return (
            <>
              <HistoriesButton song={song}></HistoriesButton>
            </>
          )
        })}
      </div>
    </>
  )
}

Songs.getLayout = createGetAppLayout()

export default Songs
