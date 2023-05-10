import { ChangeEvent, FC, useEffect, useState } from 'react'
import { authUtils } from '@/utils/authUtils'
import { useRouter } from 'next/router'
import { userApi } from '@/api/routes/UserApi'
import Preview from '../images/Preview'
import { styles } from '@/styles/components/inputs/InputFile.style'
import { useSelector } from 'react-redux'
import { UserState } from '@/redux/types/userSlice.type'

const InputFile: FC = () => {
  const router = useRouter()
  const user = useSelector((state: UserState) => state.user.value)

  const [imgUrl, setImgUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const user = await authUtils.isAuthenticated()
      if (!user) {
        router.push('/login')
      }
      setImgUrl(user.image_url)
      setLoading(false)
    })()
  }, [])

  const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const body = {
        upload_image: e.currentTarget.files[0],
      }
      try {
        setLoading(true)
        const res = await userApi.uploadImage(user.id, body)
        setImgUrl(res.data)
      } catch (e) {
        setLoading(false)
      }
      setLoading(false)
    }
  }

  return (
    <>
      {loading ? 'loading...' : <Preview image_url={imgUrl}></Preview>}
      <label css={styles.label}>
        <input
          onChange={onChangeHandler}
          type='file'
          accept='image/*'
          css={styles.input}
        />
      </label>
    </>
  )
}

export default InputFile
