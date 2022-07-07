import { configureStore } from '@reduxjs/toolkit'
import arrayReducer from './reducer/sortingSlice'
export default configureStore({
  reducer: {
    data: arrayReducer,
  },
})  