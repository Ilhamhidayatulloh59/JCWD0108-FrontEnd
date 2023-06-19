import { createSlice } from '@reduxjs/toolkit'

const intialValue = {
    value: {
        username: "",
        email: "",
        password: ""
    }
}

const userSlice = createSlice({
    name: "user",
    initialState: intialValue,
    reducers: {
        setValue: (state, action) => {
            state.value.username = action.payload.username
            state.value.email = action.payload.email
            state.value.password = action.payload.password
        }
    }
})

export const { setValue } = userSlice.actions
export default userSlice.reducer