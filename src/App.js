import React from 'react'
import logo from './logo.svg'
import './App.css'
import AppNavbar from './layouts/AppNavbar'
import PaletteList from './components/PaletteList'
import data from "./data"

function App () {
  return (
    <div className='App'>
      <AppNavbar />
      <PaletteList palettes={data} />
    </div>
  )
}

export default App
