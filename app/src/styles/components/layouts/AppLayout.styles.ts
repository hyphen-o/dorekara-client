import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  header: (isHome) => css`
    position: ${isHome ? '' : 'fixed'};
    width: 100%;
    background-color: ${color.red};
    height: ${isHome ? '36vh' : '220px'};
    padding-top: 25px;
    margin-bottom: ${isHome ? '132px' : '5px'};
    transition: 0.3s;
    border-radius: 0 0 20px 20px;
  `,
}
