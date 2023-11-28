import { useState, useEffect } from "react"

import DashboardCard from '../components/DashboardCard/DashboardCard'

import { getProfile } from '../services/userService'
import { getDashboardTweets } from '../services/postService'

export default function DashBoard () {

  const [ user, setUser ] = useState({})
  const [tweets, setTweets] = useState([]);

  const [liked, setLiked] = useState([])

  useEffect(() => {
    const getData = async() => {
      const profile = await getProfile()
      const arr = await getDashboardTweets()
      const filtered = arr.filter(elem => {
        return elem.userId !== profile.id
      }).slice(80)
      setUser(profile)
      setTweets(filtered)
    }
    getData()
  }, [])

  const displayCards = () => {
    return tweets.map(tweet => {
      return (
        <DashboardCard key={tweet.id} info={tweet} likes={liked} changeLikes={setLiked} />
      )
    })
  }

  return (
    <>
      {
        Object.keys(user).length !== 0 ?
        <>
          <main className="main-container">
            <h1>
              { `Welcome ${ user.user_name }!` }
            </h1>
            <p>
              { user.email }
            </p>
            <div>
              { displayCards() }
            </div>
          </main>
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