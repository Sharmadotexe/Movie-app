import React from 'react'
import MovieCard from './components/MovieCard'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favourites from './pages/Favourites'
import Navbar from "./components/Navbar"
import "./css/App.css"
import { MovieProvider } from './contexts/MovieContext'

const App = () => {


  return (
    <MovieProvider>
      <Navbar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favourites' element={<Favourites/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App