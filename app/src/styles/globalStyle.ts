import { css } from '@emotion/react'
import 'modern-css-reset'

export const globalStyle = () => css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Noto+Sans+JP:wght@400;500;600&display=swap');

  body {
    font-family: Lato, 'Noto Sans JP', 'Helvetica Neue', 'Arial',
      'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', -apple-system,
      BlinkMacSystemFont, system-ui, sans-serif;
  }
`
