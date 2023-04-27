import Link from 'next/link'
import type { FC } from 'react'
import Avatar from '../images/Avatar'
import { styles } from '@/styles/components/buttons/AvatarButton.style'


const AvatarButton: FC = () => {
  return (
    <>
      <Link href='config' css={styles.button}>
        <Avatar></Avatar>
      </Link>
    </>
  )
}

export default AvatarButton
