import { styles } from '@/styles/components/buttons/AddButton.style'
import type { FC } from 'react'

const AddButton: FC = () => {
  return (
    <>
      <button css={styles.button} type='submit'>
        +
      </button>
    </>
  )
}

export default AddButton
