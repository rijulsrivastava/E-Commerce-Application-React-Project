import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            for (let item of state.items) {
                if (item.id == action.payload.id) {
                    item.quantity += 1
                    return
                }
            }
            state.items.push({ ...action.payload, quantity: 1 })
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0
        },
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