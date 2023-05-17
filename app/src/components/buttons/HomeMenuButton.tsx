import { styles } from '@/styles/components/buttons/HomeMenuButton.style'
import Image from 'next/image'
import { useRouter } from 'next/router'
import type { FC } from 'react'

type Props = {
  text: string
  page: string
}

const HomeMenuButton: FC<Props> = ({ text, page }) => {
  const router = useRouter()
  const changePage = (page) => {
    router.push(page)
  }

  return (
    <>
      <button
        type='button'
        onClick={() => changePage(page)}
        css={styles.button}
      >
        <Image src={`/images/icons/${page}.png`} alt={text} width={36} height={36} css={styles.icon}/>
        <div css={styles.text}>{text}</div>
      </button>
    </>
  )
}

export default HomeMenuButton
