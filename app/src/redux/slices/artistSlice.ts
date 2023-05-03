import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Artist, ArtistValue } from '../types/artistSlice.type'

const initialState: ArtistValue = {
  value: [],
}

export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    setArtist: (state, action: PayloadAction<Artist[]>) => {
      state.value = action.payload
    },
  },
})

export const { setArtist } = artistSlice.actions
export default artistSlice.reducer
