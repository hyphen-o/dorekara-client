import { FC } from 'react'
import SquareButton from './SquareButton'
import { Song } from '@/redux/types/songSlice.type'


type Props = {
  song: Song
}

const HistoriesButton: FC<Props> = ({ song }) => {

  return (
    <>
      <SquareButton text={song.name} song_key={song.key} />
    </>
  )
}

export default HistoriesButton
