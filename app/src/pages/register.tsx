import { NextPage } from 'next'
import Container from '@/components/containers/Container'
import AuthLogo from '@/components/images/AuthLogo'
import { styles } from '@/styles/pages/Login.style'
import TransButton from '@/components/buttons/TransButton'
import RegisterForm from '@/components/forms/RegisterForm'

const Register: NextPage = () => {
  return (
    <>
      <Container>
        <div css={styles.wrapper}>
          <AuthLogo />
          <RegisterForm />
          <p css={styles.text}>登録済みの方はこちら</p>
          <TransButton text='ログイン' pageLink='/login' />
        </div>
      </Container>
    </>
  )
}

export default Register
