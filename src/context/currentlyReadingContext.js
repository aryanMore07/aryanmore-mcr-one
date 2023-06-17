import { createContext, useState } from "react";

export const CurrentlyReadingContext = createContext();

export const CurrentlyReadingProvider = ({children}) => {


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
    

    const [currentlyRead, setCurrentlyRead] = useState(initialCurrentlyReading)

    return <CurrentlyReadingContext.Provider value={{ currentlyRead}}>{children}</CurrentlyReadingContext.Provider>
} 