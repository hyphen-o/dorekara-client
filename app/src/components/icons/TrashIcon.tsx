import Image from 'next/image'
import type { FC } from 'react'

type Props = {
  onIconClick: () => void
}

const TrashIcon: FC<Props> = ({ onIconClick }) => {
  return (
    <>
      <div onClick={onIconClick}>
        <Image
          src='/images/icons/delete.png'
          alt='trash'
          width={28}
          height={28}
        ></Image>
      </div>
    </>
  )
}

export default TrashIcon
