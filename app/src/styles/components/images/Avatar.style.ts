import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  wrapper: css`
    margin: 0 auto;
  `,
  image: css`
    border-radius: 50%;
    margin: 0 auto;
    width: 60px;
    height: 60px;
    border: solid ${color.darkgray};
  `,
  name: css`
    color: ${color.white};
    font-size: 10px;
    text-align: center;
  `,
}
