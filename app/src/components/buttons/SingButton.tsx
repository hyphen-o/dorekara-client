import { styles } from '@/styles/components/buttons/SingButton.style'
import Image from 'next/image'
import type { FC } from 'react'

const SingButton: FC = () => {

  const handleSingButtonClick = () => {
    (async () => {
      
    })()
  }

  
  return (
    <>
        <div onClick={handleSingButtonClick}>
          <Image
            src='/images/icons/singButton.png'
            alt='singbutton'
            width={164}
            height={164}
            css={styles.button}
            />
        </div>
    </>
  )
}

export default SingButton
