import { styles } from '@/styles/pages/Login.style'
import TransButton from '@/components/buttons/TransButton'
import RegisterForm from '@/components/forms/RegisterForm'
import { AuthLayout } from '@/components/layouts/AuthLayout'
import { NextPageWithLayout } from '@/components/types/Layout.type'

const Register: NextPageWithLayout = () => {
  return (
    <>
      <div css={styles.wrapper}>
        <RegisterForm />
        <p css={styles.text}>登録済みの方はこちら</p>
        <TransButton text='ログイン' pageLink='/login' />
      </div>
    </>
  )
}

Register.getLayout = AuthLayout

export default Register
