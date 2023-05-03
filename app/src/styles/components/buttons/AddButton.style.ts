import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  button: css`
    border-radius: 5px;
    height: 43px;
    width: 43px;
    font-size: 20px;
    border: none;
    color: ${color.white};
    background-color: ${color.red};
    text-align: center;
  `,
}
