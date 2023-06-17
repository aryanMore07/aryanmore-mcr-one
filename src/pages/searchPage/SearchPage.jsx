import React, { useContext } from 'react';
import './searchpage.css';
import { BookContext } from '../../context/BookContext';
import Input from '@mui/material/Input';

const SearchComponent = () => {

  const { state, searchBook, dispatch } = useContext(BookContext);

  const searchHandler = (event) => {
    dispatch({ type: 'USER_INPUT', payload: event.target.value })
  }
  return (
    <div>
      <Input placeholder='Please input book name' onChange={searchHandler} />
      <div className='search-div'>
        {
          state.searchInput.length === 0 ? (<p style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '25px', width: '1540px', fontWeight: '700'}}>Please input book name</p>) : 
          searchBook.map((book) => {
            const { name, author, image } = book
            return (
              <div id={name}>
                <img src={image} alt={name} />
                <p><b>{name}</b></p>
                <p>{author}</p>
              </div>
            )
          })
        }
        {searchBook.length === 0 && state.searchInput.length > 1 && <p style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '25px', width: '1540px', fontWeight: '700'}}>No book found</p>}
      </div>
    </div>
  )
}

export default SearchComponent;
