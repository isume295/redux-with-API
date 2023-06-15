import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://randomuser.me/api/?results=5'

const initialState = {
    users: [],
    isLoading: true,
    error: '',
}

export const getUsers = createAsyncThunk('user/getUser', async ( thunkAPI) => {
    try{   
        const resp = await fetch(url);
        const respJson = await resp.json();
        return respJson.results;

    }catch(error){
        thunkAPI.rejectWithValue(error)
    }
})

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getUsers.fulfilled, (state, action) => {
          state.isLoading = false;
          state.users = action.payload;
        })
        .addCase(getUsers.rejected, (state, action) => {
          state.isLoading = false;
        });
    }
})

export default usersSlice.reducer;