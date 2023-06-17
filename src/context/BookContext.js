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

 const initialCurrentlyReading =  [
    {
        name: 'It Starts With Us',
        author: 'Kunex',
        image: 'https://images-eu.ssl-images-amazon.com/images/I/51W-r3VQlAL._AC_SX184_.jpg',
    },
    {
        name: 'Vahana',
        author: 'Stuti Gupta',
        image: 'https://images-eu.ssl-images-amazon.com/images/I/512URrvFNBL._AC_SX184_.jpg',
    },
    {
        name: 'VAJPAYEE: The Ascent of the Hindu Right',
        author: 'Abhishek Choudhary',
        image: 'https://images-eu.ssl-images-amazon.com/images/I/41b87IOB+LL._AC_SX184_.jpg',
    },
    {
        name: 'Happiness is Success',
        author: 'AiR Atman in Ravi',
        image: 'https://images-eu.ssl-images-amazon.com/images/I/41kA4c9GYIL._AC_SX184_.jpg',
    }
]





export const BookProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducerFunction, {
        booksData: data,
        searchInput: '',
        currentlyReading: initialCurrentlyReading,

    })
    console.log(state.searchInput);
    const searchBook = state.searchInput ? state.booksData.filter(({name}) => name.toLowerCase().includes(state.searchInput)) : []
    return <BookContext.Provider value={{ state, dispatch, searchBook }}>{children}</BookContext.Provider>
}
