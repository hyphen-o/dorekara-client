import { styles } from '@/styles/components/images/Dorekana.style'
import Image from 'next/image'
import { FC } from 'react'

type Props = {
  isOpen?: boolean
}

const Dorekana: FC<Props> = ({isOpen}) => {

  return (
    <>
      <div>
        {isOpen ? 
          <Image
          src='/images/dorekana/dorekana-after.png'
          alt='dorekana-after'
          width={300}
          height={300}
          css={styles.fade_in}
          />
        : 
          <button  type='submit' css={styles.button}>
            <Image
            src='/images/dorekana/dorekana-before.png'
            alt='dorekana-before'
            width={300}
            height={300}
            />
          </button>
        }
      </div>  
    </>
  )
}

export default Dorekana