import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer