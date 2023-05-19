import { styles } from '@/styles/components/images/Avatar.style'
import { authUtils } from '@/utils/authUtils'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

const Avatar: FC = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [imgUrl, setImgUrl] = useState<string>('')
  const [name, setName] = useState<string>('')

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)

        const user = await authUtils.isAuthenticated()
        if (!user) router.push('/login')

        setImgUrl(user.image_url)
        setName(user.name)
        setLoading(false)
      } catch (e) {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <>
      <div css={styles.wrapper}>
        {!loading ? (
          <img
            src={
              imgUrl === 'default_url.png'
                ? `/images/icons/usericon.png`
                : imgUrl
            }
            alt='avatar'
            width={60}
            height={60}
            css={styles.image}
          />
        ) : (
          <img
            src='/images/icons/usericon.png'
            alt='loading'
            width={60}
            height={60}
            css={styles.image}
          />
        )}
        <div css={styles.name}>{name}</div>
      </div>
    </>
  )
}

export default Avatar
