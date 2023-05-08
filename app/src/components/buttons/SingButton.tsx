import { songApi } from '@/api/routes/SongApi'
import { UserState } from '@/redux/types/userSlice.type'
import { styles } from '@/styles/components/buttons/SingButton.style'
import Image from 'next/image'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import { useSelector } from 'react-redux'

const SingButton: FC = () => {
  const router = useRouter()
  const user = useSelector((state: UserState) => state.user.value)

  const handleSingButtonClick = () => {
    ;(async () => {
      //ユーザの持つ曲を全て取得
      const res = await songApi.getAll(user.id)
      if(res.data) {
        //曲をローカルに保持
        localStorage.setItem('songs', JSON.stringify(res.data))
        router.push('karaoke')
      } else {
        //曲が存在しなければページ遷移しない
        alert('曲をまず作成しましょう！')
        return
      }
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
