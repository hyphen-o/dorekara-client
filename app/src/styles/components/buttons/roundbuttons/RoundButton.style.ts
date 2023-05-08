import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  button: ({ theme }) => {
    return css`
      border-radius: 100px;
      height: 43px;
      width: 260px;
      border: ${theme === 'red' ? 'none' : 'solid' + color.red};
      color: ${theme === 'red' ? color.white : color.red};
      background-color: ${theme === 'red' ? color.red : color.white};
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    `
  },
}
