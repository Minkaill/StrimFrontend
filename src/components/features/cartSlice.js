import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    cart: [],
    error: null,
}

const user = localStorage.getItem('user')

export const getCart = createAsyncThunk("get/cart", async (_, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:4000/cart/${user}`)
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


export const incrementAmountProduct = (createAsyncThunk("inc/cart", async ({productId}, thunkAPI) => {
    try {
        const response = await axios.patch(`http://localhost:4000/cart/inc/${user}`, {product: productId})
    
        if(response.data.error) {
            return thunkAPI.rejectWithValue(response.error);
        }
        return productId;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
}))


export const decrementAmountProduct = (createAsyncThunk("dec/cart", async ({productId}, thunkAPI) => {
    try {
        const response = await axios.patch(`http://localhost:4000/cart/dec/${user}`, {product: productId})
        if(response.data.error) {
            return thunkAPI.rejectWithValue(response.error);
        }
        return productId;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
}))


export const addProductInBasket = createAsyncThunk("add/cart", async ({productId}, thunkAPI) => {
    try {
        const response = await axios.post(`http://localhost:4000/cart/add/${user}`, { product: productId})
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


export const deleteProductInBasket = createAsyncThunk("delete/cart", async ({productId}, thunkAPI) => {
    try {
        const response = await axios.delete(`http://localhost:4000/cart/delete/${user}`, {data: {product: productId}})
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        thunkAPI.rejectWithValue(error.message)
    }
})


// export const decAmount = createAsyncThunk("dec/cart", async())


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCart.fulfilled, (state, action) => {
            state.cart = action.payload
        })
        .addCase(getCart.rejected, (state, action) => {
            state.error = action.payload
        })
        builder
        .addCase(addProductInBasket.fulfilled, (state, action) => {
            state.cart.push(action.payload)
        })
        .addCase(deleteProductInBasket.fulfilled, (state, action) => {
            state.cart = action.payload
        })
        .addCase(deleteProductInBasket.rejected, (state, action) => {
        })
        .addCase(incrementAmountProduct.fulfilled, (state, action) => {
            state.cart.products = state.cart.products.map((item) => {
                if(item.productId === action.payload) {
                    item.amount++;
                }
                return item;
            })
        })
        .addCase(decrementAmountProduct.fulfilled, (state, action) => {
            state.cart.products = state.cart.products.map((item) => {
                if(item.productId === action.payload) {
                    item.amount--;
                }
                return item;
            })
        })
    }
})


export default cartSlice.reducer