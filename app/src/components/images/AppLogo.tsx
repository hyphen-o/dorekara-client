import { FC } from 'react'
import Image from 'next/image'
import { styles } from '@/styles/components/images/AppLogo.style'

type Props = {}

const AppLogo: FC<Props> = () => {
  return (
    <>
      <Image
        src='/images/logos/appLogo.svg'
        alt='dorekara-app-logo'
        css={styles.image}
        width={120}
        height={120}
      ></Image>
    </>
  )
}

export default AppLogo
