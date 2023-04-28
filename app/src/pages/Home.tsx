import AvatarButton from '@/components/buttons/AvatarButton'
import HomeMenuButton from '@/components/buttons/HomeMenuButton'
import SingButton from '@/components/buttons/SingButton'
import { createGetAppLayout } from '@/components/layouts/AppLayout'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { styles } from '@/styles/pages/Home.style'

const home: NextPageWithLayout = () => {
  return (
    <>
      <AvatarButton></AvatarButton>
      <SingButton></SingButton>
      <div css={styles.wrapper}>
        <HomeMenuButton text='曲一覧' page='songs'></HomeMenuButton>
        <HomeMenuButton text='アーティスト一覧' page='artists'></HomeMenuButton>
        <HomeMenuButton text='カラオケ履歴' page='histories'></HomeMenuButton>
      </div>
    </>
  )
}

home.getLayout = createGetAppLayout()

export default home
