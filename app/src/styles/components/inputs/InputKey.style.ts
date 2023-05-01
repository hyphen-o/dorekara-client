import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  input: css`
    border-radius: 100px;
    height: 43px;
    width: 75px;
    border: none ${color.red};
    background-color: ${color.gray};
    color: ${color.darkgray};
    padding: 0 20px;
    display: flex;
    margin-bottom: 10px;
    font-size: 14px;
  `
}
