import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  array: [],
  algorithm: 'bubbleSort',
  color: '#256D85',
  speed: 20,
  isSorting: false,
}

const arraySlice = createSlice({
  name: 'array',
  initialState : initialState,
  reducers: {
    randArray: (state, action) => {
      const temp = [];
      for (let i = 0; i < action.payload; i++) {
          temp.push(Math.round(Math.random() * 400 + 30));
      }
      return {...state, array: temp }  
    },
    selectAlgo : (state, action) => { 
      return {  ...state, algorithm: action.payload }
    },
    resetColor : (state, action) => {
      console.log(action.payload);
      return {  ...state, color: action.payload }
    },
    speedSelect : (state, action) => {
      return {  ...state, speed: action.payload }
    },
    sortingUpdate : (state, action) => {
      return {  ...state, isSorting: action.payload }
    }
  }
})

export const { randArray, selectAlgo, resetColor, speedSelect, sortingUpdate } = arraySlice.actions

export default arraySlice.reducer