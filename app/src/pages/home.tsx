import AvatarButton from '@/components/buttons/AvatarButton'
import HomeMenuButton from '@/components/buttons/HomeMenuButton'
import SingButton from '@/components/buttons/SingButton'
import { createGetAppLayout } from '@/components/layouts/AppLayout'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { styles } from '@/styles/pages/Home.style'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div css={styles.wrapper}>
        <AvatarButton></AvatarButton>
        <SingButton></SingButton>
        <HomeMenuButton text='楽曲' page='songs'></HomeMenuButton>
        <HomeMenuButton text='アーティスト' page='artists'></HomeMenuButton>
        <HomeMenuButton text='カラオケ履歴' page='histories'></HomeMenuButton>
      </div>
    </>
  )
}

Home.getLayout = createGetAppLayout({ isHome: true })

export default Home
