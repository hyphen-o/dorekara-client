import { styles } from '@/styles/components/inputs/InputKey.style'
import { FC, useEffect, useState } from 'react'
import { SongFormValues } from '../types/SongForm.type'
import { UseFormRegister } from 'react-hook-form'

type Props = {
  submit: UseFormRegister<SongFormValues>
  value?: number
}

const InputKey: FC<Props> = ({ submit, value }) => {
  const [key, setKey] = useState<string>('0')

  useEffect(() => {
    if (value) setKey(String(value))
  }, [value])

  return (
    <>
      <input
        {...submit('key', {
          required: true,
        })}
        css={styles.input}
        type='number'
        min={-5}
        max={5}
        value={key}
        placeholder='key'
        onChange={(e) => setKey(e.target.value)}
      />
    </>
  )
}

export default InputKey
