import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: "sah1"
    },
    reducers: {
        addLetter: (state) => {
            const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            state.value += alphabet[Math.floor(Math.random() * alphabet.length)];
        },
    }
});

export const { addLetter } = userSlice.actions;

export const selectUser = (state) => state.user.value;
export default userSlice.reducer;
