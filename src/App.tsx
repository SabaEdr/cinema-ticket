
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Movie from './movie'
function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:name" element={<Movie />} />
     </Routes>
    </>
  )
}

export default App
