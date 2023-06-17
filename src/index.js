import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BookContext, BookProvider } from './context/BookContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReadContext, ReadProvider } from './context/ReadContext';
import { WantToReadContext, WantToReadProvider } from './context/wantToReadContext';
import { CurrentlyReadingContexts, CurrentlyReadingProvider } from './context/currentlyReadingContext';
export { BookContext }
export { ReadContext }
export { WantToReadContext }
export { CurrentlyReadingContexts }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <BookProvider>
        <ReadProvider>
        <WantToReadProvider>
          <CurrentlyReadingProvider>
          <App />
          </CurrentlyReadingProvider>
        </WantToReadProvider>
        </ReadProvider>
      </BookProvider>
    </Router>
  </React.StrictMode>
);