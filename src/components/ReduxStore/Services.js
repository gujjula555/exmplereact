import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios"

export const login = createAsyncThunk(
    "auth/login", async (data) => {

        const result = await axios.post("http://localhost:4050/api/users/login", data
            // {
            //     "email": "gujjula555@gmail.com",
            //     "password": "Raja5599@"
            // }
        );

        return result.data

    }
)

export const register = createAsyncThunk(
    "auth/register", async (data) => {

        const result = await axios.post("http://localhost:4050/api/users/login", data
            // {
            //     "email": "gujjula555@gmail.com",
            //     "password": "Raja5599@"
            // }
        );

        return result.data

    }
)
