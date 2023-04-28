import { styles } from '@/styles/components/layouts/AppLayout.styles'
import { GetLayout } from '../types/Layout.type'
import AppLogo from '../images/AppLogo'
import LogoText from '../texts/LogoText'
import { FC, ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'

const AppLayout: FC<LayoutProps> = ({ children, isHome }) => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) router.push('login')
  })

  return (
    <>
      <header css={styles.header}>
        <AppLogo />
        <LogoText />
        {isHome}
      </header>
      <main>{children}</main>
    </>
  )
}

type LayoutProps = {
  children: ReactNode
  isHome: boolean
}

export const createGetAppLayout = (layoutProps?: LayoutProps): GetLayout => {
  return function getLayout(page) {
    return <AppLayout {...layoutProps}>{page}</AppLayout>
  }
}
