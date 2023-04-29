import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  header: (isHome) => css`
    background-color: ${color.red};
    height: ${isHome ? '254px' : '215px'};
    padding-top: 25px;
    margin-bottom: ${isHome ? '132px' : '5px'};
    transition: 0.3s;
  `,
}
