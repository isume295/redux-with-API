import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./redux/users/usersSlice";

export const store = configureStore({
    reducer: {
        user: usersReducer,
    }
   
});