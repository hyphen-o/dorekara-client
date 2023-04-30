import { songApi } from '@/api/routes/SongApi'
import Image from 'next/image'
import type { FC } from 'react'
import { useSelector } from 'react-redux'

type Props = {
  id: number 
}

const TrashIcon: FC<Props> = ({id}) => {
  const user = useSelector(state => state.user.user)

  const handleTrashIconClick = () => {
    console.log(id + user.id)
    songApi.destroy({song_id: id, user_id: user.id})
  }

  return (
    <>
      <div onClick={handleTrashIconClick}>
        <Image src='/images/icons/trash.png' alt='trash' width={28} height={28}></Image>     
      </div>
    </>
  )
}

export default TrashIcon
