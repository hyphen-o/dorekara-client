import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  button: css`
    border: none;
    background-color: ${color.white};
  `,
  fade_in: css`
    opacity: 0;
    animation: fadein-anim 1s linear forwards;
    @keyframes fadein-anim {
      100% {
        opacity: 1;
      }
    }
  `
}
