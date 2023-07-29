import { FC } from 'react'
import SquareButton from './SquareButton'
import TrashIcon from '@/components/icons/TrashIcon'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { UserState } from '@/redux/types/userSlice.type'
import { Song } from '@/redux/types/songSlice.type'
import { songApi } from '@/api/routes/SongApi'
import EditIcon from '@/components/icons/EditIcon'
import { truncateString } from '@/utils/formatText'

type Props = {
  song: Song
}

const SongsButton: FC<Props> = ({ song }) => {
  const router = useRouter()
  const user = useSelector((state: UserState) => state.user.value)

  const handleTrashIconClick = () => {
    ;(async () => {
      await songApi.destroy({ song_id: song.id, user_id: user.id })
      router.reload()
    })()
  }

  const handleEditIconClick = () => {
    router.push(`songs/${song.id}/edit`)
  }

  return (
    <>
      <SquareButton
        text={truncateString({ text: song.name, maxLength: 7 })}
        song_key={song.key}
      >
        <EditIcon onIconClick={handleEditIconClick} />
        <TrashIcon onIconClick={handleTrashIconClick} />
      </SquareButton>
    </>
  )
}

export default SongsButton
