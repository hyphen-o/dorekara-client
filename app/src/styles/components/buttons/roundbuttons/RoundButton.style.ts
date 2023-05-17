import { color, util } from '@/styles/theme'
import { css } from '@emotion/react'
import { rgba } from 'emotion-rgba'

export const styles = {
  button: ({ theme }) => {
    return css`
      border-radius: 100px;
      height: 43px;
      width: 260px;
      border: ${theme === 'red' ? 'none' : 'solid' + ' 2px ' + color.red};
      color: ${theme === 'red' ? color.white : color.red};
      background-color: ${theme === 'red' ? color.red : color.white};
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      box-shadow: 0 0.3rem 0.1rem ${rgba(color.darkgray, color.shadow_alpha)};
      ${util.push};
    `
  },
}
