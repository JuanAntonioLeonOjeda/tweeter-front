import { Outlet } from "react-router-dom"

import AppBarComponent from '../components/AppBarComponent/AppBarComponent'

export default function Root() {
  return (
    <>
      <AppBarComponent />
      <Outlet />
    </>
  )
}