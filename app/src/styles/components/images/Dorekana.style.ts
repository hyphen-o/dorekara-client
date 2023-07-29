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
    -webkit-animation: fadein-anim 1s linear forwards;
    @keyframes fadein-anim {
      100% {
        opacity: 1;
      }
    }
  `,

  image: css`
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-name: anim_h;
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
