import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type User = {
  id: number | null
  name: string | null
}

const initialState: User = {
  id: null,
  name: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state = action.payload
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
