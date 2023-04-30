import { styles } from '@/styles/components/texts/Title.style'
import { FC } from 'react'

type Props = {
  title: string
}

const Title: FC<Props> = ({ title }) => {
  return <div css={styles.title}>{title}</div>
}

export default Title
