import { css } from "@emotion/react";


export const color = {
  gray: '#F2F2F2',
  darkgray: '#4F4F4F',
  placeholder: '#B7B7B7',
  white: '#FFFFFF',
  red: '#E85456',
  shadow_alpha: 0.15,
}

export const util = {
  push: css`
    :active {
        transform: translate(0, 0.3rem);
        box-shadow: none;
    }
  `
}
