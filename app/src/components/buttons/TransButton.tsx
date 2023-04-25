import { styles } from '@/styles/components/buttons/Button.style'
import { css } from '@emotion/react'
import Link from 'next/link'
import type { FC } from 'react'

type Props = {
  text: string
  pageLink: string
}

const TransButton: FC<Props> = ({ text, pageLink }) => {
  return (
    <>
      <Link
        href={pageLink}
        css={css`
          text-decoration: none;
        `}
      >
        <button css={styles.button({ isSubmit: false })}>{text}</button>
      </Link>
    </>
  )
}

export default TransButton
