import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  select: css`
    border-radius: 100px;
    height: 43px;
    width: 260px;
    border: solid ${color.red};
    background-color: ${color.white};
    color: ${color.red};
    padding: 0 20px;
    display: flex;
    text-align: center;
    margin: 8px auto;
    font-size: 14px;
  `,
}
