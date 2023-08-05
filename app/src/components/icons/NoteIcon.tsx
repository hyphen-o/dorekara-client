import Image from 'next/image'
import type { FC } from 'react'

const NoteIcon: FC = () => {
  return (
    <>
      <div>
        <Image
          src='/images/icons/note.svg'
          alt='note'
          width={30}
          height={30}
        ></Image>
      </div>
    </>
  )
}

export default NoteIcon
