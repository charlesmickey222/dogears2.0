import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookBank from './components/pages/BookBank/BookBank'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path='/book-bank' element={<BookBank/>}/>
      </Routes>
    </div>
  );
}

export default App;
