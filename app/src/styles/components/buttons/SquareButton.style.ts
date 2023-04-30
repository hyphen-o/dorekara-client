import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  button: css`
    border-radius: 5px;
    height: 57px;
    width: 300px;
    font-size: 20px;
    font-weight: 600;
    border: solid 2px ${color.red};
    color: ${color.red};
    background-color: ${color.white};
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 15px;
  `,

  key: css`
    padding-left: 10px;
    font-size: 16px;
  `,

  icons_wrapper: css`
    display: flex;
    padding: 0 5px;
  `,

  text_wrapper: css`
    display: flex;
    padding: 0 5px;
    align-items: center;
  `,
}
