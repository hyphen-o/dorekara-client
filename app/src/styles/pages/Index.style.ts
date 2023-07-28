import { css } from '@emotion/react'
import { color } from '../theme'

export const styles = {
  image: css`
    margin: 0 auto;
    padding-right: 10px;
  `,
  wrapper: css`
    background-color: ${color.red};
    width: 100vw;
    height: 100vh;
  `,
  textWrapper: css`
    margin-bottom: 50px;
  `,
  logoWrapper: css`
    margin-top: 20px;
  `,
  title: css`
    font-size: 12px;
    color: ${color.white};
    text-align: center;
    margin: 0 auto;
  `,
  text: css`
    font-size: 14px;
    color: ${color.white};
    text-align: center;
    margin: 0 auto;
  `,
}
