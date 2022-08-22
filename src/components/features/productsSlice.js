import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    products: [],
    costums: [],
    bruks: [],
    ochki: [],
    rubashki: [],
    chasi: [],
    obuv: []
}


export const getProducts = createAsyncThunk("get/products", async (categoryId, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product", {category: 'Костюмы'})
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const getBruks = createAsyncThunk("get/bruks", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product/bruks")
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const getObuv = createAsyncThunk("get/obuv", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product/obuv")
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const getOchki = createAsyncThunk("get/ochki", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product/ochki")
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const getRubashki = createAsyncThunk("get/rubashki", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product/rubashki")
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const getChasi = createAsyncThunk("get/chasi", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product/chasi")
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const getCostums = createAsyncThunk("get/costums", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product/costums")
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
        .addCase(getCostums.fulfilled, (state, action) => {
            state.costums = action.payload
        })
        .addCase(getBruks.fulfilled, (state, action) => {
            state.bruks = action.payload
        })
        .addCase(getOchki.fulfilled, (state, action) => {
            state.ochki = action.payload
        })
        .addCase(getRubashki.fulfilled, (state, action) => {
            state.rubashki = action.payload
        })
        .addCase(getChasi.fulfilled, (state, action) => {
            state.chasi = action.payload
        })
        .addCase(getObuv.fulfilled, (state, action) => {
            state.obuv = action.payload
        })
    }
})


export default productsSlice.reducer