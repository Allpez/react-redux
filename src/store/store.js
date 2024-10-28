import { configureStore } from "@reduxjs/toolkit"
import { productReducer } from "./reducers/productReducer"

const store = configureStore({ //Configuramos el store
    // Cuales son los reducers que necesitamos
    reducer: {
        productStore: productReducer,
    }, 
})

//Estamos creando un objeto que se llama state y tiene las sig propiedades, lo usamos en ProductFilter.ja
// state {
//    productStore
// }

export default store