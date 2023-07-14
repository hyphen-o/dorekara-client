import { css } from '@emotion/react'

export const styles = {
  button: css`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 37vh; /*追記*/
    left: 50vw; /*追記*/

    &:before {
      content: '';
      position: absolute;
      width: 100px;
      height: 100px;
      background-color: black;
    }
  `,
}
