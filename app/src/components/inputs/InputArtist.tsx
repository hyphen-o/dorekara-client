import { styles } from '@/styles/components/inputs/InputSong.style'
import { FC, useEffect, useState } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'
import { ArtistFormValues } from '../types/Form.type'

type InputProps = {
  submit: UseFormRegister<ArtistFormValues>
  label: Path<ArtistFormValues>
  value?: string
}

const InputArtist: FC<InputProps> = ({ submit, label, value }) => {
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
          maxLength: 8,
        })}
        type='text'
        placeholder={label}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  )
}

export default InputArtist
