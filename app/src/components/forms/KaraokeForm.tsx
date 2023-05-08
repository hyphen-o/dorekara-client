import { FC, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { KaraokeFormValues } from '../types/Form.type'
import Dorekana from '../images/Dorekana'
import Selector from '../inputs/Selector'
import RoundButton from '../buttons/roundbuttons/RoundButton'
import { styles } from '@/styles/components/forms/KaraokeForm.style'

const KaraokeForm: FC = () => {
  const [isOpen, SetIsOpen] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
  } = useForm<KaraokeFormValues>()

  const onSubmit: SubmitHandler<KaraokeFormValues> = async (data) => {
    try {
      SetIsOpen(true)
    } catch (error) {
      return error
    }
  }

  const handleRoundButtonClick = () => {
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} css={styles.form}>
        <div css={styles.text}>
          {
            //hard
            !isOpen ? 'TAP!' : '曲名'
          }    
        </div>
        <Dorekana isOpen={isOpen} ></Dorekana>
        { !isOpen && <Selector submit={register} text='次に歌う曲のアーティスト'></Selector>}
      </form>
      { !isOpen && <RoundButton theme='red' text='カラオケ終了！' handleButtonClick={handleRoundButtonClick}></RoundButton>}
      { isOpen && <RoundButton theme='red' text='次の曲！' handleButtonClick={() => SetIsOpen(false)}></RoundButton>}

    </>
  )
}

export default KaraokeForm
