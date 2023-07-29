import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  input: css`
    border-radius: 5px;
    height: 43px;
    width: 260px;
    border: none;
    background-color: ${color.gray};
    color: ${color.darkgray};
    padding: 0 20px;
    display: flex;
    margin: 8px 0px;
    font-size: 16px;
    ::placeholder {
      color: ${color.placeholder};
    }
  `,
}
