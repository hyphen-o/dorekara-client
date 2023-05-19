import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  button: css`
    border: none;
    background-color: ${color.white};
    margin: 0 auto;
  `,
  fade_in: css`
    margin: 0 auto;
    opacity: 0;
    animation: fadein-anim 1s linear forwards;
    @keyframes fadein-anim {
      100% {
        opacity: 1;
      }
    }
  `,

  image: css`
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: 0.5s;
    animation-name: anim_h;
    @keyframes anim_h {
      0% {
        transform: translate(0px, 0);
      }
      100% {
        transform: translate(5px, 0);
      }
    }
  `,
}
