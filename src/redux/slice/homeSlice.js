import { createSlice } from "@reduxjs/toolkit";
import { categorias } from "../../data/categorias";
import { productos } from "../../data/productos";
const homeSlice = createSlice({
   
    name: 'home',
   
    initialState: { 
        allCategories: categorias,
        allProducts: productos,
        categorySelected: "",
        productsFilterByCategory: [],
        productSelected: {},
    },

    reducers: {
        setCategory: (state, action) => {
            state.categorySelected = action.payload;

            state.productsFilterByCategory = state.allProducts.filter(
                (el) => el.category === state.categorySelected
            );
        },

        

    },
})
export const { setCategory } = homeSlice.actions;
export default homeSlice.reducer;