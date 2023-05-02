import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/redux/slices/userSlice'
import songReducer from '@/redux/slices/songSlice'
import artistReducer from '@/redux/slices/artistSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    song: songReducer,
    artist: artistReducer,
  },
})
