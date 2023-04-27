import { styles } from '@/styles/components/buttons/SingButton.style'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'


const SingButton: FC = () => {
  return (
    <>
      <Link href='karaoke'>
        <Image src="/images/icons/singButton.png" alt="singbutton" width={164} height={164} css={styles.button}/>
      </Link>
    </>
  )
}

export default SingButton
