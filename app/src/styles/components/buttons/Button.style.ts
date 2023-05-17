import { color, util } from '@/styles/theme'
import { css } from '@emotion/react'
import { rgba } from 'emotion-rgba'

export const styles = {
  button: ({ isSubmit }) => {
    return css`
      border-radius: 100px;
      height: 43px;
      width: 260px;
      border: ${isSubmit ? 'none' : 'solid' + ' 1px ' + color.red};
      color: ${isSubmit ? color.white : color.red};
      background-color: ${isSubmit ? color.red : color.white};
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      box-shadow: 0 0.3rem 0.1rem ${rgba(color.darkgray, color.shadow_alpha)};
      ${util.push};
    `
  },
}
