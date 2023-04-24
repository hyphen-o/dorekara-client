import { FC } from "react";
import SubmitButton from "../buttons/SubmitButton";
import { styles } from "@/styles/components/forms/loginform.style";
import { useForm, SubmitHandler } from "react-hook-form";
import Error from "../texts/Error";
import InputAuth from "../inputs/InputAuth";

type Inputs = {
  username: string,
  password: string,
}

const LoginForm: FC = () => {
  const {register, handleSubmit, watch, formState: {errors} } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

  console.log(watch('username'))

  return (
    <>
      <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputAuth register={register} label="username" required/>     
        <InputAuth register={register} label="password" required/>
        <SubmitButton text="ログイン" />
        {errors.username && <Error>ユーザ名を入力してください</Error>} 
        {errors.password && <Error>パスワードを入力してください</Error>} 
      </form>
    </>
  )
}

export default LoginForm;