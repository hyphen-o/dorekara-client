import { styles } from '@/styles/components/buttons/roundbuttons/RoundButton.style'
import type { FC } from 'react'

type Props = {
  theme: string
  text: string
  handleButtonClick: () => void
}

const RoundButton: FC<Props> = ({ theme, text, handleButtonClick }) => {
  return (
    <>
      <button css={styles.button({ theme })} onClick={handleButtonClick}>
        {text}
      </button>
    </>
  )
}

export default RoundButton
