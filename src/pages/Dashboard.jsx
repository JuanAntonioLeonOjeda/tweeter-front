import { useState, useEffect } from "react"

import { getProfile } from '../services/userService'

export default function DashBoard () {

  const [ user, setUser ] = useState({})

  useEffect(() => {
    const getData = async() => {
      const result = await getProfile()
      setUser(result)
    }
    getData()
  }, [])

  return (
    <>
      {
        Object.keys(user).length !== 0 ?
        <>
          <h1>
            { `Welcome ${ user.user_name }!` }
          </h1>
          <p>
            { user.email }
          </p>
          {
            localStorage.getItem('role') === 'admin' &&
            <h3>
              You are the best admin! :D
            </h3>
          }
        </>
        :
        <h1>
          Loading...
        </h1>
      }
    </>
  )
}