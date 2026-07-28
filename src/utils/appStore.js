import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'
import cartReducer from './cartSlice'


// configureStore creates the store
export const appStore = configureStore({

    // reducer is used to manage the state of cart and search
    reducer: {
        cart: cartReducer,
        search: searchReducer
    }
})