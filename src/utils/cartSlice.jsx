import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


// create slice is used to create cart slice in the store
export const cartSlice = createSlice({
    name: 'cart',
    //In initialState empty array is stored
    initialState: {
        items: []
    },
    reducers: {
        // to add a product to the cart slice in the store here addItem is defined
        addItem: (state, action) => {
            for (let item of state.items) {
                if (item.id == action.payload.id) {
                    item.quantity += 1
                    return
                }
            }
            state.items.push({ ...action.payload, quantity: 1 })
        },
        // to remove a product from the cart slice \removeItem is defined
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id != action.payload.id)
        },
        // to empty the cart clearCart is defined
        clearCart: (state) => {
            state.items.length = 0
        },
        // to decrement the quantity of particular product decrement is defined
        decrement: (state, action) => {
            for (let item of state.items) {
                if (item.id == action.payload.id && item.quantity > 1) {
                    item.quantity -= 1
                }
            }
        }
    }
})

export const { addItem, removeItem, clearCart, decrement } = cartSlice.actions
export default cartSlice.reducer