import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Song, SongValue } from '../types/songSlice.type'

const initialState: SongValue = {
  value: [],
}

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setSong: (state, action: PayloadAction<Song[]>) => {
      state.value = action.payload
    },
  },
})

export const { setSong } = songSlice.actions
export default songSlice.reducer
