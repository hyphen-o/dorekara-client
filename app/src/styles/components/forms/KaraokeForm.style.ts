import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  songNameWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  text: (size: string) => css`
    font-size: 
      ${size === 'st' ? '40px' : 
        size === 'md' ? '30px' :
        size === 'lg' && '15px'
    };
    text-align: center;
    color: ${color.red};

    margin-left: 20px;
  `,
  form: css`
    margin-top: 100px;
    margin-bottom: 50px;
  `,
  artist: css`
    text-align: center;
    font-size: 20px;
    color: ${color.red};
  `,
  key: css`
    text-align: center;
    color: ${color.red};
  `,
}
