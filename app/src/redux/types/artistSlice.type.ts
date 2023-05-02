export type Artist = {
  id: number | null
  name: string | null
  artist_id: number | null
  key: number | null
}

export type ArtistValue = {
  value: Artist[]
}

export type ArtistState = {
  artist: ArtistValue
}
