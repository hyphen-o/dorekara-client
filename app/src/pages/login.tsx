import { NextPage } from "next";
import Container from "@/components/containers/Container";
import AuthLogo from "@/components/images/AuthLogo";
import { styles } from "@/styles/pages/login.style";
import TransButton from "@/components/buttons/TransButton";
import LoginForm from "@/components/forms/LoginForm";

const Login: NextPage = () => {
  return (
    <>
      <Container>
        <div css={styles.wrapper}>
          <AuthLogo />
          <LoginForm />
          <p css={styles.text}>新規登録はこちら</p>
          <TransButton text="新規登録" pageLink="/register"/>
        </div>
      </Container>
    </>
  )
}

export default Login