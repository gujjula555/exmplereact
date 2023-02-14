import { configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import loginReducer from './Reducer.js'

export const store = configureStore({
    reducer :{
        loginuser: loginReducer
    }
})

