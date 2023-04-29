import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  header: (isHome) => css`
    background-color: ${color.red};
    height: ${isHome ? '254px' : '210px'};
    padding-top: 25px;
    margin-bottom: 132px;
    transition: 0.5s;
  `,
}
