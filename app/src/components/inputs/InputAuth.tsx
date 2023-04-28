import { styles } from '@/styles/components/inputs/InputAuth.style'
import { FC } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

type FormValues = {
  name: string
  password: string
  confirmPassword?: string
}

type InputProps = {
  submit: UseFormRegister<FormValues>
  label: Path<FormValues>
  confirm?: string
}

const InputAuth: FC<InputProps> = ({ submit, label, confirm }) => {
  return (
    <>
      <input
        css={styles.input}
        {...submit(label, {
          required: true,
          minLength: label === 'name' ? 4 : 8,
          validate: (value): boolean => confirm && value === confirm,
        })}
        type={label === 'name' ? 'text' : 'password'}
        placeholder={label}
      />
    </>
  )
}

export default InputAuth
