import React, { useContext } from 'react';
import './homepage.css';
import { BookContext } from '../../context/BookContext';
import { ReadContext } from '../../context/ReadContext';
import { WantToReadContext } from '../../context/wantToReadContext';
import { CurrentlyReadingContext } from '../../context/currentlyReadingContext';

const HomeComponent = () => {

    const { state } = useContext(BookContext);
    const { read, addToRead, removeFromRead } = useContext(ReadContext);
    const { wantTORead } = useContext(WantToReadContext);
    // const { currentlyRead } = useContext(CurrentlyReadingContext);

    return (
        <div>
            <div className='currently-reading-div'>
                <p style={{ fontSize: '35px', fontWeight: '700' }}>Currently Reading</p>
                <hr />
                <div className='currentlyReading-data'>
                    {
                        state?.currentlyReading.map((book) => {
                            const { name, author, image } = book
                            return (
                                <div id={name}>
                                    <img src={image} alt={name} />
                                    <p><b>{name}</b></p>
                                    <p>{author}</p>
                                    <button onClick={() => {
                                        addToRead()
                                        //remove from currentky reading
                                    }}>Add To readed</button>
                                    <button>Want to Read</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='want-to-read-div'>
                <p style={{ fontSize: '35px', fontWeight: '700' }}>Want to read</p>
                <hr />
                <div className='wantToRead-data'>
                    {
                        wantTORead.map((book) => {
                            const { name, author, image } = book
                            return (
                                <div id={name}>
                                    <img src={image} alt={name} />
                                    <p><b>{name}</b></p>
                                    <p>{author}</p>
                                    <button onClick={() => {
                                        addToRead(book)
                                        // Remove from want to read
                                    }}>Add To Read</button>
                                    <button onClick={() => {
                                        // Add to current reading
                                        // remove from currently Reading
                                    }}>Add To Currently Reading</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='read-div'>
                <p style={{ fontSize: '35px', fontWeight: '700' }}>Reads</p>
                <hr />
                <div className='read-data'>
                    {
                        read.map((book) => {
                            const { name, author, image } = book
                            return (
                                <div id={name}>
                                    <img src={image} alt={name} />
                                    <p><b>{name}</b></p>
                                    <p>{author}</p>
                                    <button onClick={() => {
                                        // Add To Currently Reading
                                        removeFromRead(book)
                                    }}>Add To Currently Reading</button>
                                    <button onClick={() => {
                                        // Add To want to read
                                        removeFromRead(book)
                                    }}>Want To read</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
