import { styles } from '@/styles/components/buttons/SquareButton.style'
import { FC } from 'react'
import EditIcon from '@/components/icons/EditIcon'
import TrashIcon from '@/components/icons/TrashIcon'

type Props = {
  type: string
  id: number
  text: string
  song_key?: number
  isEditable?: boolean
}

const SquareButton: FC<Props> = ({ type ,id, text, song_key, isEditable}) => {

  const changePage = () => {

  }

  return (
    <>
      <button
        type='button'
        onClick={() => changePage()}
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
