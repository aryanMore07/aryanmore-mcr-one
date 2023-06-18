import { createContext, useReducer } from "react";
import { data } from "../data/data";

export const BookContext = createContext();

const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'USER_INPUT':
            return {
                ...state, searchInput: action.payload
            }
        default:
            return state;
    }
}


export const BookProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducerFunction, {
        booksData: data,
        searchInput: '',

    })
    const searchBook = state.searchInput ? state.booksData.filter(({name}) => name.toLowerCase().includes(state.searchInput)) : []
    return <BookContext.Provider value={{ state, dispatch, searchBook }}>{children}</BookContext.Provider>
}
