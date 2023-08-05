import { artistApi } from '@/api/routes/ArtistApi'
import ArtistsButton from '@/components/buttons/squarebuttons/ArtistsButton'
import ArtistForm from '@/components/forms/ArtistForm'
import { createGetAppLayout } from '@/components/layouts/AppLayout'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { setArtist } from '@/redux/slices/artistSlice'
import { ArtistState } from '@/redux/types/artistSlice.type'
import { styles } from '@/styles/pages/Songs.style'
import { authUtils } from '@/utils/authUtils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Index: NextPageWithLayout = () => {
  const router = useRouter()
  const artists = useSelector((state: ArtistState) => state.artist.value)
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      const user = await authUtils.isAuthenticated()
      if (!user) router.push('login')
      const res = await artistApi.getAll(user.id)
      dispatch(setArtist(res.data[0]))
    })()
  }, [])

  return (
    <>
      <div css={styles.wrapper}>
        {artists.map((artist) => {
          return (
            <>
              <ArtistsButton artist={artist} />
            </>
          )
        })}
        <ArtistForm />
      </div>
    </>
  )
}

Index.getLayout = createGetAppLayout({label: "アーティスト一覧"})

export default Index
