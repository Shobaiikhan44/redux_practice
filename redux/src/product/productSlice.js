import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProduct = createAsyncThunk (
    'product/fetchProduct', 
    async() => {
        const response = await fetch('https://fakestoreapi.com/products') ; 
        const data = await response.json();
        return data ;

    }
)


const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [] , 
        status: 'idle'  , 
        error: null
    },
    reducers : {
        addToCart: 
        (state, action) =>{
            state.items.push(action.payload) ; 
        }
    }, 
    extraReducers: (builder) =>{
        builder 
        .addCase(fetchProduct.pending , (state) =>{
            state.status = 'loading'
        
        })
        .addCase(fetchProduct.fulfilled , (state, action) =>{
            state.items = action.payload ;
            state.status = "success" 
        })
        .addCase(fetchProduct.rejected , (state, action) => {
            state.status = 'failed'
            state.error = action.error 
        })
    }
})

export default productSlice.reducer 