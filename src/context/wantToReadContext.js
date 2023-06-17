import { createContext, useState } from "react";

export const WantToReadContext = createContext();

export const WantToReadProvider = ({children}) => {

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

    const [wantTORead, setWantToRead] = useState(initialWantTORead)

    return <WantToReadProvider value={{wantTORead}}>{children}</WantToReadProvider>
}