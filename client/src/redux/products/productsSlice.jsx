import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState= {
    items:[{id: nanoid(), img: "lqndqd", name: "qnqd", price: 10, count: 0},{id: nanoid(), img: "lqndqd", name: "qnqd", price: 10, count: 0},{id: nanoid(), img: "lqndqd", name: "qnqd", price: 10, count: 0},{id: nanoid(), img: "lqndqd", name: "qnqd", price: 50, count: 0}],
    totalItemsCount: 0
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        setCount: (state,action)=>{
            const targetItem = state.items.find((item)=>item.id===action.payload.id)
            targetItem.count = targetItem.count+action.payload.count
            console.log("item count: ",targetItem.count)
            state.totalItemsCount+=action.payload.count
        }
    }
})


export const selectTotalItemsCount = state=>state.products.totalItemsCount
export const {setCount} = productsSlice.actions
export const selectProducts = state=>state.products.items
export default productsSlice.reducer