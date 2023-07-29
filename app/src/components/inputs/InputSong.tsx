import { styles } from '@/styles/components/inputs/InputSong.style'
import { FC, useEffect, useState } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'
import { SongFormValues } from '../types/Form.type'

type InputProps = {
  submit: UseFormRegister<SongFormValues>
  label: Path<SongFormValues>
  value?: string
}

const InputSong: FC<InputProps> = ({ submit, label, value }) => {
  const [text, setText] = useState<string>(value)

  useEffect(() => {
    setText(value)
  }, [value])

  return (
    <>
      <input
        css={styles.input}
        {...submit(label, {
          required: true,
        })}
        type='text'
        placeholder={label}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  )
}

export default InputSong
