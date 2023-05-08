import KaraokeForm from '@/components/forms/KaraokeForm'
import { styles } from '@/styles/pages/Karaoke.style'
import { NextPage } from 'next'

const Karaoke: NextPage = () => {
  return (
    <>
      <div css={styles.wrapper}>
        <KaraokeForm></KaraokeForm>
      </div>
    </>
  )
}
export default Karaoke
