import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        handleLogout: (state) => {
            state.currentUser = null
        },
        handleLogin: (state, action) => {
            state.currentUser = action.payload
        }
    }

})

export const { handleLogin, handleLogout } = userSlice.actions;
export default userSlice.reducer

