import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value: ["Coding", "Eat", "Sleep"]
    },
    reducers: {
        onAdd: (state, action) => {
            state.value.push(action.payload)
        },
        onDelete: (state, action) => {
            state.value.splice(action.payload, 1)
        },
        onEdit: (state, action) => {
            // action.payload bentuknya object {index, input}
            state.value.splice(action.payload.index, 1, action.payload.input)
        }
    }
})

export const { onAdd, onDelete, onEdit } = todoSlice.actions
export default todoSlice.reducer