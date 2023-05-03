import { artistApi } from '@/api/routes/ArtistApi'
import { setArtist } from '@/redux/slices/artistSlice'
import { styles } from '@/styles/components/inputs/Selector.style'
import { authUtils } from '@/utils/authUtils'
import { FC, useEffect, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { SongFormValues } from '../types/SongForm.type'
import { ArtistState } from '@/redux/types/artistSlice.type'

type Props = {
  submit: UseFormRegister<SongFormValues>
  text: string
  value?: number
}

const Selector: FC<Props> = ({ text, submit, value }) => {
  const dispatch = useDispatch()
  const artists = useSelector((state: ArtistState) => state.artist.value)
  const [artist_id, setArtist_id] = useState(value)

  useEffect(() => {
    ;(async () => {
      const user = await authUtils.isAuthenticated()
      const res = await artistApi.getAll(user.id)
      dispatch(setArtist(res.data[0]))
    })()
  }, [])

  useEffect(() => {
    setArtist_id(value)
  }, [value])

  return (
    <>
      <select
        name='selector'
        css={styles.select}
        {...submit('artist_id')}
        value={artist_id}
        onChange={(e) => setArtist_id(Number(e.target.value))}
      >
        <option value=''>{text}</option>
        {artists.map((artist) => {
          return (
            <option value={artist.id} key={artist.id}>
              {artist.name}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Selector
