import { authApi } from '@/api/routes/AuthApi'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

type Props = {}

const Avatar: FC<Props> = () => {
  const router = useRouter()
  useEffect(() => {
    ;(async () => {
      try {
        const res = await authApi.me(localStorage.getItem('token'))
        console.log(res.data.user)
      } catch (error) {
        localStorage.removeItem('token')
        router.push('login')
      }
    })()
  }, [])

  return (
    <>
      <Image
        src='/images/icons/usericon.png'
        alt='avatar'
        width={60}
        height={60}
      ></Image>
    </>
  )
}

export default Avatar
