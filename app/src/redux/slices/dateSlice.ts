import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DateValue, Date } from '../types/dateSlice.type'

const initialState: DateValue = {
  value: [],
}

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<Date[]>) => {
      state.value = action.payload
    },
  },
})

export const { setDate } = dateSlice.actions
export default dateSlice.reducer
