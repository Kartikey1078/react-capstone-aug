import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import  Home  from "./pages/Home";
import Movie from './pages/Movie'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={Home}></Route>
        <Route path='/Movie' element={<Movie />} ></Route>
        <Route path='/Home' element={<Home />} ></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
