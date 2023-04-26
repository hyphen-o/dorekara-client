import { styles } from '@/styles/components/texts/Error.style'
import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Error: FC<Props> = ({ children }) => {
  return <span css={styles.error}>{children}</span>
}

export default Error
