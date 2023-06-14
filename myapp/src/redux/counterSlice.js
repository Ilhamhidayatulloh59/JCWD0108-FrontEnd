import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementBy: (state, actions) => {
            state.value += actions.payload
        },
        decrementBy: (state, actions) => {
            state.value -= actions.payload
        }
    }
})

export const { increment, decrement, incrementBy, decrementBy } = counterSlice.actions
export default counterSlice.reducer