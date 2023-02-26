import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';

const initialState = {data: {}, isLogin: false, isAdmin: false, isBurgerOpen: false}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addingData(state, action){
      state.data = action.payload
    },
    isLoginFunc(state, action){
      state.isLogin = action.payload;
    },
    isAdminFunc(state, action){
      state.isAdmin = action.payload;
    },
    isBurgerOpenFunc(state, action){
      state.isBurgerOpen = action.payload;
    }
  }
})

export const { addingData, isLoginFunc, isAdminFunc, isBurgerOpenFunc } = dataSlice.actions
export default dataSlice.reducer;