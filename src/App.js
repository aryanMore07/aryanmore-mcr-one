import './App.css';
import HomeComponent from './pages/homepage/HomePage';
import { Routes, Route } from 'react-router';
import SearchComponent from './pages/searchPage/SearchPage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/search' element={<SearchComponent />} />
      </Routes>
    </div>
  );
}

export default App;
