import React, { useContext } from 'react';
import './homepage.css';
import { BookTransferContext } from '../../context/BookTrasferContext';
import { NavLink } from 'react-router-dom';

const HomeComponent = () => {
    const {state, dispatch} = useContext(BookTransferContext);

    return (
        <div>
            <div className='currently-reading-div'>
                <p style={{ fontSize: '35px', fontWeight: '700' }}>Currently Reading </p>
                <NavLink to='/search' className='btn btn-primary'>Search for Books</NavLink>
                <hr />
                <div className='currentlyReading-data'>
                    {
                        state?.currentlyReading.map((book) => {
                            const { name, author, image } = book
                            return (
                                <div key={name}>
                                    <img src={image} alt={name} />
                                    <p><b>{name}</b></p>
                                    <p>{author}</p>
                                    <button className='btn btn-primary' style={{margin: '8px'}} onClick={() => {
                                        dispatch({type: 'ADD_TO_READ_FROM_CURRENTLY', payload: book.name})
                                    }}>Add To readed</button>
                                    <button className='btn btn-primary' style={{margin: '8px'}} onClick={() => {
                                        dispatch({type: 'ADD_TO_WANTS_FROM_CURRENTLY', payload: book.name})
                                    }}>Want to Read</button>
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
                        state?.wantToRead.map((book) => {
                            const { name, author, image } = book;
                            return (
                                <div key={name}>
                                    <img src={image} alt={name} />
                                    <p><b>{name}</b></p>
                                    <p>{author}</p>
                                    <button className='btn btn-primary' style={{margin: '8px'}} onClick={() => {
                                        dispatch({type: 'ADD_TO_READ_FROM_WANTS', payload: book.name})
                                    }}>Add To Read</button>
                                    <button className='btn btn-primary' style={{margin: '8px'}} onClick={() => {
                                        dispatch({type: 'ADD_TO_CURRENTLY_FROM_WANTS', payload: book.name})
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
                        state?.read.map((book) => {
                            const { name, author, image } = book
                            return (
                                <div key={name}>
                                    <img src={image} alt={name} />
                                    <p><b>{name}</b></p>
                                    <p>{author}</p>
                                    <button className='btn btn-primary' style={{margin: '8px'}} onClick={() => {
                                        dispatch({type: 'ADD_TO_CURRNETLY_FROM_READS', payload: book.name})
                                    }}>Add To Currently Reading</button>
                                    <button className='btn btn-primary' style={{margin: '8px'}} onClick={() => {
                                        dispatch({type: 'ADD_TO_WANTS_FROM_READS', payload: book.name})
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
