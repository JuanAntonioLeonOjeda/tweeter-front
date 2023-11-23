import { CssBaseline } from '@mui/material'

import { RouterProvider } from 'react-router-dom'

import config from './router'

import './App.css'

function App() {
  return (
    <>
      <RouterProvider router={config} />
      <CssBaseline />
    </>
  )
}

export default App
