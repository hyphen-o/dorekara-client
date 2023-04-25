import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  button: ({ isSubmit }) => {
    return css`
      border-radius: 100px;
      height: 43px;
      width: 260px;
      border: ${isSubmit ? 'none' : 'solid' + color.red};
      color: ${isSubmit ? color.white : color.red};
      background-color: ${isSubmit ? color.red : color.white};
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    `
  },
}
