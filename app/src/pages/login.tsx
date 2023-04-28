import TransButton from '@/components/buttons/TransButton'
import LoginForm from '@/components/forms/LoginForm'
import { AuthLayout } from '@/components/layouts/AuthLayout'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { styles } from '@/styles/pages/Login.style'

const Login: NextPageWithLayout = () => {
  return (
    <>
      <div css={styles.wrapper}>
        <LoginForm />
        <p css={styles.text}>新規登録はこちら</p>
        <TransButton text='新規登録' pageLink='/register' />
      </div>
    </>
  )
}

Login.getLayout = AuthLayout

export default Login
