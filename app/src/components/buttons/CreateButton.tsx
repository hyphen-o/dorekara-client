import { styles } from '@/styles/components/buttons/CreateButton.style'
import { useRouter } from 'next/router'
import type { FC } from 'react'

const CreateButton: FC = () => {
  const router = useRouter()

  return (
    <>
      <button css={styles.button} type='button' onClick={() => router.push('songs/create')}>
        <div css={styles.wrapper}>
          <div>曲を追加する</div>
          <div>+</div>
        </div>
      </button>
    </>
  )
}

export default CreateButton
