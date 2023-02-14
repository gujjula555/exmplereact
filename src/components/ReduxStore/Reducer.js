import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./Services";


const initialState = {
    data: {},
    loading: false,
    error: false,
};

const loginUser = createSlice({
    name: "auth",
    initialState: initialState,
    // reducers: {
    //     login: (state, action) => {
    //         state.users = action.payload;
    //         state.loading = true;
    //         state.error = false;
    //     }
    // },
    extraReducers: (builder) => {

        //fetch
        builder.addCase(login.fulfilled, (state, action) => {
           // console.log("action",action.payload.token)
            state.data = action.payload.token;
            state.loading = true;
            state.error = false;
        }).addCase(login.rejected, (state, action) => {
            state.data = {};
            state.loading = true;
            state.error = action.error.message || '';
        }).addCase(login.pending, (state, action) => {
            //state.users = action.payload;
            state.loading = true;
            // state.error = false;
         })
        .addCase(register.fulfilled, (state, action) => {
            // console.log("action",action.payload.token)
            state.data = action.payload;
            state.loading = true;
            state.error = false;
        }).addCase(register.rejected, (state, action) => {
            state.data = {};
            state.loading = true;
            state.error = action.error.message || '';
        }).addCase(register.pending, (state, action) => {
            //state.users = action.payload;
            state.loading = true;
            // state.error = false;
        })




    }

})
const { actions, reducer } = loginUser

//export const { login } = actions

export default reducer


