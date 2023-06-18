import { createContext, useReducer } from "react";

export const BookTransferContext = createContext();

const reducerfunction = (state, action) => {
    switch (action.type) {

        // For currently reading
        case 'ADD_TO_READ_FROM_CURRENTLY':
                return {
                    ...state, 
                    read: [...state.read, state.currentlyReading.find(({name}) => name === action.payload)],
                    currentlyReading: state.currentlyReading.filter(({name}) => name !== action.payload)
                }
        case 'ADD_TO_WANTS_FROM_CURRENTLY':
            return {
                ...state,
                wantToRead: [...state.wantToRead, state.currentlyReading.find(({name}) => name === action.payload)],
                currentlyReading: state.currentlyReading.filter(({name}) => name !== action.payload)
            }
        
        // For Want to read
        case 'ADD_TO_READ_FROM_WANTS': 
            return {
                ...state,
                read: [...state.read, state.wantToRead.find(({name}) => name === action.payload)],
                wantToRead: state.wantToRead.filter(({name}) => name !== action.payload),
            }
        case 'ADD_TO_CURRENTLY_FROM_WANTS':
            return {
                ...state,
                currentlyReading: [...state.currentlyReading, state.wantToRead.find(({name}) => name === action.payload)],
                wantToRead: state.wantToRead.filter(({name}) => name !== action.payload),
            }

        // For Reads

        case 'ADD_TO_CURRNETLY_FROM_READS':
            return {
                ...state,
                currentlyReading: [...state.currentlyReading, state.read.find(({name}) => name === action.payload)],
                read: state.read.filter(({name}) => name !== action.payload), 
            }
        case 'ADD_TO_WANTS_FROM_READS': 
            return {
                ...state,
                wantToRead: [...state.wantToRead, state.read.find(({name}) => name === action.payload)],
                read: state.read.filter(({name}) => name !== action.payload), 
            }
        default:
            return state
    }
}

export const BookTrasnferProvider = ({children}) => {

    
    const initialWantTORead = [
        {
            name: 'Independence',
            author: 'Chitra Banerjee Divakaruni',
            image: 'https://images-eu.ssl-images-amazon.com/images/I/51AmkgkFucL._AC_SX184_.jpg',
        },
        {
            name: 'The Indian Metropolis',
            author: 'Feroze Varun Gandhi',
            image: 'https://images-eu.ssl-images-amazon.com/images/I/41cqBP3CKoL._AC_SX184_.jpg',
        },
        {
            name: 'Dust Child',
            author: 'Nguyen Phan Que Mai',
            image: 'https://images-eu.ssl-images-amazon.com/images/I/51dZimXq-YL._AC_SX184_.jpg',
        }
    ]

    const initialRead =  [
        {
            name: 'Maggie Discovers the Rainbow',
            author: 'Kara Navolio, Tracie Timmer',
            image: 'https://images-eu.ssl-images-amazon.com/images/I/51yiF43VRkL._AC_SX184_.jpg',
        },
        {
            name: 'Why Am I Like This?: A Journey into',
            author: 'Judy Balan',
            image: 'https://images-eu.ssl-images-amazon.com/images/I/51RJP7hNpVL._AC_SX184_.jpg',
        },
        {
            name: 'Wall',
            author: 'Jen Craig',
            image: 'https://images-eu.ssl-images-amazon.com/images/I/31j2B54QyFL._AC_SX184_.jpg',
        },
        {
            name: 'THE ABYSS',
            author: 'Jeyamohan',
            image: 'https://images-eu.ssl-images-amazon.com/images/I/41rkMKTQ7TL._AC_SX184_.jpg',
        }
    ]

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

    const [state, dispatch] = useReducer(reducerfunction, {
        read: initialRead,
        wantToRead: initialWantTORead,
        currentlyReading: initialCurrentlyReading
    })

    return <BookTransferContext.Provider value={{state, dispatch}}>{children}</BookTransferContext.Provider>
}