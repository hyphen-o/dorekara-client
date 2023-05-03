import Image from 'next/image'
import type { FC } from 'react'

type Props = {
  onIconClick: () => void
}

const EditIcon: FC<Props> = ({ onIconClick }) => {
  return (
    <>
      <div onClick={onIconClick}>
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
