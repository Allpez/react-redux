import { createContext, useReducer } from 'react';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_SEARCH = 'SET_SEARCH';

export const FilterStateContext = createContext("");
export const FilterDispatchContext = createContext("");

export const FilterProvider = ({ children }) => {
  const [state,dispatch] = useReducer(productReducer,initialState);

  return (
    <FilterStateContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
      {children}
      </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
};

const productReducer = (state, action) => {

  switch (action.type) {
    case SET_CATEGORY:      
      return { ...state, category: action.payload };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

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


const initialState = {
  products: initialProducts,
  category: "Todas",
  search: "",
};


