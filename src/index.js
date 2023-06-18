import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookTransferContext, BookTrasnferProvider } from './context/BookTrasferContext';
import { BookContext, BookProvider } from './context/BookContext';
export { BookContext }
export { BookTransferContext }
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <BookTrasnferProvider>
        <BookProvider>
          <App />
        </BookProvider>
      </BookTrasnferProvider>
    </Router>
  </React.StrictMode>
);