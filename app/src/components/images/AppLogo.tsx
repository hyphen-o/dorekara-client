import { FC } from 'react'
import Image from 'next/image'
import { styles } from '@/styles/components/images/AppLogo.style'

type Props = {}

const AppLogo: FC<Props> = () => {
  return (
    <>
      <Image
        src='/images/logos/applogo.png'
        alt='dorekara-app-logo'
        css={styles.image}
        width={135}
        height={135}
      ></Image>
    </>
  )
}

export default AppLogo
