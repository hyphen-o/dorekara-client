import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type User = {
  id: number | null
  name: string | null
}

type UserState = {
  user: User
}

const initialState: UserState = {
  user: {
    id: null,
    name: null,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
