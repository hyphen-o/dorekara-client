import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/redux/slices/userSlice'
import songReducer from '@/redux/slices/songSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    song: songReducer,
  },
})
