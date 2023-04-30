import { styles } from '@/styles/components/buttons/SquareButton.style'
import { useRouter } from 'next/router'
import { FC } from 'react'
import EditIcon from '@/components/icons/EditIcon'
import TrashIcon from '@/components/icons/TrashIcon'

type Props = {
  id: number
  text: string
  song_key?: number
  isEditable?: boolean
  page?: string
}

const SquareButton: FC<Props> = ({ id, text, song_key, isEditable, page }) => {
  const router = useRouter()

  const changePage = (page) => {
    if (page) {
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
        <div css={styles.text_wrapper}>
          <div>{text}</div>
          <div css={styles.key}>{song_key ? song_key : ''}</div>
        </div>
        <div css={styles.icons_wrapper}>
          {isEditable && <EditIcon id={id} />}
          <TrashIcon id={id} />
        </div>
      </button>
    </>
  )
}

export default SquareButton
