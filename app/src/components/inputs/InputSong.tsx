import { styles } from '@/styles/components/inputs/InputSong.style'
import { FC } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

type FormValues = {
  title: string
  key: number
}

type InputProps = {
  submit: UseFormRegister<FormValues>
  label: Path<FormValues>
}

const InputSong: FC<InputProps> = ({ submit, label }) => {
  return (
    <>
      <input
        css={styles.input}
        {...submit(label, {
          required: true,
          minLength: label === 'title' ? 1 : 0,
          maxLength: 8,
        })}
        type='text'
        placeholder={label}
      />
    </>
  )
}

export default InputSong
