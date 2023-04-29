import { styles } from '@/styles/components/buttons/SquareButton.style'
import { useRouter } from 'next/router'
import { FC } from 'react'

type Props = {
  text: string
  song_key: number
  page?: string
}

const SquareButton: FC<Props> = ({ text, song_key, page}) => {
  const router = useRouter()

  const changePage = (page) => {
    if(page) {
      router.push(page)
    }
  }

  return (
    <>
      <button
        type='button'
        onClick={() => changePage(page)}
        css={styles.button}
      >
      <div>
        {text}
      </div>
      <div>
        {song_key}     
      </div>
      </button>
    </>
  )
}

export default SquareButton
