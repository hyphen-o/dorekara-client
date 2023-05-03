import { styles } from '@/styles/components/buttons/SquareButton.style'
import { FC, ReactNode } from 'react'

type Props = {
  text: string
  song_key?: number
  children: ReactNode
}

const SquareButton: FC<Props> = ({ text, song_key, children }) => {
  const changePage = () => {}

  return (
    <>
      <button type='button' onClick={() => changePage()} css={styles.button}>
        <div css={styles.text_wrapper}>
          <div>{text}</div>
          <div css={styles.key}>{song_key ? song_key : ''}</div>
        </div>
        <div css={styles.icons_wrapper}>{children}</div>
      </button>
    </>
  )
}

export default SquareButton
