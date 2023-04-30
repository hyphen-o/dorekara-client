import Image from 'next/image'
import { useRouter } from 'next/router'
import type { FC } from 'react'

type Props = {
  id: number
}

const EditIcon: FC<Props> = ({ id }) => {
  const router = useRouter()

  const handleTrashIconClick = () => {
    router.push(`songs/${id}/edit`)
  }

  return (
    <>
      <div onClick={handleTrashIconClick}>
        <Image
          src='/images/icons/pencil.png'
          alt='edit'
          width={28}
          height={28}
        ></Image>
      </div>
    </>
  )
}

export default EditIcon
