import { FC } from 'react'
import SquareButton from './SquareButton'
import TrashIcon from '@/components/icons/TrashIcon'
import { useRouter } from 'next/router'

type Props = {
  date: string
}

const DatesButton: FC<Props> = ({ date }) => {
  const router = useRouter()

  const handleTrashIconClick = () => {
    ;(async () => {
    })()
  }

  const handleButtonClick = () => {
    router.push(`/histories/${date}`)
  }

  return (
    <>
      <SquareButton text={date} onButtonClick={handleButtonClick}>
        <TrashIcon onIconClick={handleTrashIconClick}></TrashIcon>
      </SquareButton>
    </>
  )
}

export default DatesButton
