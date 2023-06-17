import { createContext, useState } from "react";

export const ReadContext = createContext();

export const ReadProvider = ({children}) => {

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

    const [read, setRead] = useState(initialRead)

    const addToRead = (book) => {
        setRead([...read, book])
    }

    const removeFromRead = (name) => {
        setRead(read.filter((book) => book.name !== name))
        
    }

    return <ReadContext.Provider value={{ read, addToRead, removeFromRead }}>{children}</ReadContext.Provider>
} 