import { styles } from "@/styles/components/inputs/inputtext.style";
import { FC } from "react";
import { Path, UseFormRegister } from "react-hook-form";

type FormValues = {
  username: string,
  password: string,
}

type InputProps = {
  register: UseFormRegister<FormValues>,
  label: Path<FormValues>,
  required: boolean,
}

const InputAuth: FC<InputProps> = ({ register, label, required }) => {

  return (
    <>
       <input css={styles.input} {...register(label, { required })} type="text" placeholder={label}/>
    </>
  )
}

export default InputAuth;