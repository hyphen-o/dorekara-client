import TransButton from '@/components/buttons/TransButton'
import { NextPage } from 'next'
import { styles } from '@/styles/pages/Index.style'
import AppLogo from '@/components/images/AppLogo'
import Image from 'next/image'

const Index: NextPage = () => {
  return (
      <main css={styles.wrapper}>
        <div css={styles.wrapper}>
          <div css={styles.logoWrapper}>
            <AppLogo css={styles.image}/>
            <p css={styles.title}>カラオケ選曲アプリ</p>
          </div>
          <div css={styles.textWrapper}>
          <Image
            src='/images/icons/Karaoke-pana.svg'
            alt='dorekara-logo'
            css={styles.image}
            width={300}
            height={300}
          ></Image>
            <p css={styles.text}>「一曲目何歌おうかな...」</p>
            <p css={styles.text}>「次の曲を決めるのに時間がかかる」</p>
            <br />
            <p css={styles.text}>カラオケでこんな経験ありませんか？</p>
            <p css={styles.text}>どれカラは，そんな人たちに向けたアプリです</p>
          </div>
          <TransButton text='早速試してみる！' pageLink='/register' />
        </div>
      </main>
  )
}

export default Index
