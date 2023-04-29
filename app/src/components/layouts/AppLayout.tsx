import { styles } from '@/styles/components/layouts/AppLayout.styles'
import { GetLayout } from '../types/Layout.type'
import AppLogo from '../images/AppLogo'
import LogoText from '../texts/LogoText'
import { FC, ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Provider, useDispatch } from 'react-redux'
import { store } from '@/redux/store'
import { authApi } from '@/api/routes/AuthApi'
import { setUser } from '@/redux/slices/userSlice'

const AppLayout: FC<LayoutProps> = ({ children, isHome }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      ;(async () => {
        const token = localStorage.getItem('token')
        if (!token) router.push('login')
        else {
          const res = await authApi.me(localStorage.getItem('token'))
          console.log(res.data.user)
          dispatch(setUser(res.data.user))
        }
      })()
    } catch (error) {
      router.push('login')
    }
  }, [])

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
    return (
      <Provider store={store}>
        <AppLayout {...layoutProps}>{page}</AppLayout>
      </Provider>
    )
  }
}
