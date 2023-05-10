import { authApi } from '@/api/routes/AuthApi'
import RoundButton from '@/components/buttons/roundbuttons/RoundButton'
import InputFile from '@/components/inputs/InputFile'
import { createGetAppLayout } from '@/components/layouts/AppLayout'
import Title from '@/components/texts/PageTitle'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { UserState } from '@/redux/types/userSlice.type'
import { styles } from '@/styles/pages/Config.style'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Config: NextPageWithLayout = () => {
  const router = useRouter()
  const user = useSelector((state: UserState) => state.user.value)
  const handleSignOut = (): void => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  const handleUserDelete = async () => {
    const confirm = window.confirm('本当に削除しますか？')
    if (confirm) {
      localStorage.removeItem('token')
      await authApi.destroy({ user_id: user.id })
      router.push('/login')
    }
  }

  return (
    <>
      <div css={styles.wrapper}>
        <Title title='ユーザ設定' />
        <InputFile />
        <div css={styles.button}>
          <RoundButton
            theme='white'
            text='サインアウト'
            handleButtonClick={handleSignOut}
          />
        </div>
        <div css={styles.button}>
          <RoundButton
            theme='red'
            text='アカウント削除'
            handleButtonClick={handleUserDelete}
            css={styles.button}
          />
        </div>
      </div>
    </>
  )
}

Config.getLayout = createGetAppLayout()

export default Config
