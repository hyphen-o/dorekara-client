import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Song = {
  id: number | null,
  name: string | null,
  artist_id: number | null,
  key: number | null,
}

type SongState = {
    song: Song[],
}

const initialState: SongState = {
    song: []
}

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setSong: (state, action: PayloadAction<Song[]>) => {
      state.song = action.payload
    },
  },
})

export const { setSong } = songSlice.actions
export default songSlice.reducer
