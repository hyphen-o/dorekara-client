import { styles } from '@/styles/components/images/Preview.style'
import { FC } from 'react'

type Props = {
  image_url: string
}

const Preview: FC<Props> = ({image_url}) => {

  return (
    <>
      <img
        src={image_url === 'default_url.png' ? `/images/icons/usericon.png` : image_url}
        alt='preview'
        css={styles.image}
      ></img>
    </>
  )
}

export default Preview
