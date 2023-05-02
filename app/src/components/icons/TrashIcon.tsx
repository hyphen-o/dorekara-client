import { songApi } from '@/api/routes/SongApi'
import { UserState } from '@/redux/types/userSlice.type'
import Image from 'next/image'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import { useSelector } from 'react-redux'

type Props = {
  id: number
}

const TrashIcon: FC<Props> = ({ id }) => {
  const user = useSelector((state: UserState) => state.user.value)
  const router = useRouter()

  const handleTrashIconClick = () => {
    ;(async () => {
      await songApi.destroy({ song_id: id, user_id: user.id })
      router.reload()
    })()
  }

  return (
    <>
      <div onClick={handleTrashIconClick}>
        <Image
          src='/images/icons/trash.png'
          alt='trash'
          width={28}
          height={28}
        ></Image>
      </div>
    </>
  )
}

export default TrashIcon
