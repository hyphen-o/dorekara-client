import { styles } from '@/styles/components/buttons/BackButton.style'
import Image from 'next/image'
import { useRouter } from 'next/router'
import type { FC } from 'react'

const BackButton: FC = () => {
  const router = useRouter();

  return (
    <>
      <div onClick={router.back} >
        <Image
          src='/images/icons/backIcon.png'
          alt='backbutton'
          width={42}
          height={42}
        />
      </div>
    </>
  )
}

export default BackButton
