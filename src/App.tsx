import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from './home';
import Movie from './movie';
import './Movies.css'
function App() {

  return (
    <>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
    </>
  )
}

export default App
