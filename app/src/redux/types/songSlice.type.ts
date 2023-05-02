export type Song = {
  id: number | null
  name: string | null
  artist_id: number | null
  key: number | null
}

export type SongValue = {
  value: Song[]
}

export type SongState = {
  song: SongValue
}
