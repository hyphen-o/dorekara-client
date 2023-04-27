import { color } from '@/styles/theme'
import { css } from '@emotion/react'

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
    justify-content: center;
    margin-bottom: 28px;
  ` 
}
