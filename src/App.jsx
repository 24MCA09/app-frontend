import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Moviepage from './pages/Moviepage'
import Bookingpage from './pages/Bookingpage'
import AllMovies from './pages/AllMovies'


function App() {

  return (
    <>

    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/moviepage/:id' element={<Moviepage/>} />
      <Route path='/bookingpage' element={<Bookingpage/>} />
      <Route path="/all-movies" element={<AllMovies />} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
