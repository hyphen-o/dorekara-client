import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User, UserValue } from '../types/userSlice.type'

const initialState: UserValue = {
  value: {
    id: null,
    name: null,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
