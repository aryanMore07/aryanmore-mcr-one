import React, { useContext } from 'react';
import './searchpage.css';
import { BookContext } from '../../context/BookContext';
import Input from '@mui/material/Input';
import { NavLink } from 'react-router-dom';

const SearchComponent = () => {

  const { state, searchBook, dispatch } = useContext(BookContext);

  const searchHandler = (event) => {
    dispatch({ type: 'USER_INPUT', payload: event.target.value })
  }
  return (
    <div>
      <div style={{position: 'relative'}}>
      <NavLink to='/' style={{position: 'absolute',left: '65px'}} className='search_navLink btn btn-primary'>Back</NavLink>
      </div>
      <Input placeholder='Please input book name' onChange={searchHandler} />
      <div className='search-div'>
        {
          state.searchInput.length === 0 ? (<div className='search-notice-tags'><p >Please input book name</p></div>) : 
          searchBook.map((book) => {
            const { name, author, image } = book
            return (
              <div key={name}>
                <img src={image} alt={name} />
                <p><b>{name}</b></p>
                <p>{author}</p>
              </div>
            )
          })
        }
        {searchBook.length === 0 && state.searchInput.length > 1 && <div className='search-notice-tags'><p className='search-notice-tags'>No book found</p></div>}
      </div>
    </div>
  )
}

export default SearchComponent;
