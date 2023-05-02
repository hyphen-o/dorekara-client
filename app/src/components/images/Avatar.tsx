import { UserState } from '@/redux/types/userSlice.type'
import Image from 'next/image'
import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const Avatar: FC<Props> = () => {
  const user = useSelector((state: UserState) => state.user.value)
  useEffect(() => {
    ;(async () => {
      console.log(user)
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
