import { createReducer } from "@reduxjs/toolkit";
import { changeCategory, changeSearch } from "../actions/productActions";


const initialProducts = [
    { id: 1, name: "Zapatillas Deportivas", category: "Zapatos", price: 59.99 },
    { id: 2, name: "Camiseta Básica", category: "Camisetas", price: 19.99 },
    { id: 3, name: "Gorra de Béisbol", category: "Accesorios", price: 14.99 },
    { id: 4, name: "Abrigo de Lana", category: "Abrigos", price: 89.99 },
    { id: 5, name: "Sandalias", category: "Zapatos", price: 29.99 },
    { id: 6, name: "Camiseta Gráfica", category: "Camisetas", price: 24.99 },
    { id: 7, name: "Bufanda", category: "Accesorios", price: 12.99 },
    { id: 8, name: "Chaqueta de Cuero", category: "Abrigos", price: 129.99 },
];
// El estado inicial
const initialState = {
    products: initialProducts,
    category: "Todas",
    search: "",
};

//configuración
export const productReducer = createReducer(initialState, (builder) => {
    //Tenemos una accion y un return con el nuevo estado
    builder.addCase(changeCategory, (state, action) => {
        state.category = action.payload
    }).addCase(changeSearch, (state, action) => {
        state.search = action.payload
    })
})