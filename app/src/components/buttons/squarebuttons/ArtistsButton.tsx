import { FC } from 'react'
import SquareButton from './SquareButton'
import TrashIcon from '@/components/icons/TrashIcon'
import { Artist } from '@/redux/types/artistSlice.type'
import { useRouter } from 'next/router'
import { artistApi } from '@/api/routes/ArtistApi'
import { useSelector } from 'react-redux'
import { UserState } from '@/redux/types/userSlice.type'
import { truncateString } from '@/utils/formatText'

type Props = {
  artist: Artist
}

const ArtistsButton: FC<Props> = ({ artist }) => {
  const router = useRouter()
  const user = useSelector((state: UserState) => state.user.value)

  const handleTrashIconClick = () => {
    ;(async () => {
      await artistApi.destroy({ artist_id: artist.id, user_id: user.id })
      router.reload()
    })()
  }

  return (
    <>
      <SquareButton text={truncateString({ text: artist.name, maxLength: 10 })}>
        <TrashIcon onIconClick={handleTrashIconClick} />
      </SquareButton>
    </>
  )
}

export default ArtistsButton
