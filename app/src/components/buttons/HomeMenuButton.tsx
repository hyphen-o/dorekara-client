import { styles } from '@/styles/components/buttons/HomeMenuButton.style'
import { useRouter } from 'next/router'
import type { FC } from 'react'

type Props = {
  text: string
  page: string
}

const HomeMenuButton: FC<Props> = ({ text, page }) => {
  const router = useRouter();
  const changePage = (page) => {
    router.push(page)
  }

  return (
    <>
      <button type='button' onClick={() => changePage(page)} css={styles.button}>{text}</button>
    </>
  )
}

export default HomeMenuButton
