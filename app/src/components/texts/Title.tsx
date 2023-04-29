import { styles } from '@/styles/components/texts/LogoText.style'
import type { FC } from 'react'

type Props = {
  title: string,
}

const LogoText: FC<Props> = ({ title }) => {
  return <div css={styles.text}>{title}</div>
}

export default LogoText
