import { CssBaseline } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { useState } from 'react'

import SearchContext from './context/searchContext'

import config from './router'

import './App.css'

function App() {
  const [search, setSearch] = useState(0)

  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <RouterProvider router={config} />
        <CssBaseline />
      </SearchContext.Provider>
    </>
  )
}

export default App
