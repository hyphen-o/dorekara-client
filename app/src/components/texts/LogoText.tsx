
import { styles } from '@/styles/components/texts/LogoText.style'
import type { FC } from 'react'

type Props = {
}

const LogoText: FC<Props> = () => {
  return <div css={styles.text}>カラオケ選曲アプリ</div>
}

export default LogoText
