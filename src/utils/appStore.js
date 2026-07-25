import { configureStore } from '@reduxjs/toolkit'
import searchreducer from './searchSlice'
import cartReducer from './cartSlice'

export const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        search: searchreducer
    }
})