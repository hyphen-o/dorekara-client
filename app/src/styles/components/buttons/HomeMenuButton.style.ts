import { color, util } from '@/styles/theme'
import { css } from '@emotion/react'
import { rgba } from 'emotion-rgba'

export const styles = {
  button: css`
    border-radius: 100px;
    height: 57px;
    width: 300px;
    font-size: 20px;
    font-weight: 600;
    border: solid 2px ${color.red};
    color: ${color.red};
    background-color: ${color.white};
    display: flex;
    align-items: center;
    box-shadow: 0 0.3rem 0.1rem ${rgba(color.darkgray, color.shadow_alpha)};
    margin-bottom: 28px;
    ${util.push};
    padding: 0 1.5rem;
  `,
  icon: css``,
  text: css`
    text-align: center;
    margin: 0 auto;
  `,
}
