import { FC } from 'react'
import SquareButton from './SquareButton'
import { useRouter } from 'next/router'

type Props = {
  date: string
}

const DatesButton: FC<Props> = ({ date }) => {
  const router = useRouter()
  const handleButtonClick = () => {
    router.push(`/histories/${date}`)
  }

  return (
    <>
      <SquareButton text={date} onButtonClick={handleButtonClick} />
    </>
  )
}

export default DatesButton
