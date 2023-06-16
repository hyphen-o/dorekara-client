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
import BackButton from '../buttons/BackButton'
import { authUtils } from '@/utils/authUtils'

type AppLayoutProps = {
  children: ReactNode
  isHome: boolean
}

const AppLayout: FC<AppLayoutProps> = ({ children, isHome }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      ;(async () => {
        //ユーザがログイン状態か確認
        const user = await authUtils.isAuthenticated()
        if (!user) router.push('/login')
        else {
          const res = await authApi.me(localStorage.getItem('token'))
          dispatch(setUser(res.data.user))
        }
        //ユーザがカラオケ中であればカラオケ画面にリダイレクト
        if (localStorage.getItem('songs')) {
          router.push('karaoke')
        }
      })()
    } catch (error) {
      router.push('/login')
    }
  }, [])

  return (
    <>
      <header css={styles.header(isHome)}>
        <AppLogo />
        <LogoText />
        {!isHome && <BackButton css={styles.backIcon}></BackButton>}
      </header>
      <main>{children}</main>
    </>
  )
}

type LayoutProps = {
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
