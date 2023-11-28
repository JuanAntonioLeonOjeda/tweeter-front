import { useEffect, useState } from 'react'

import TweetCard from '../components/TweetCard/TweetCard'

import { getMyTweets } from '../services/postService'

function MyTweets() {
  const [ tweets, setTweets ] = useState([])

  useEffect(() => {
    const getTweets = async () => {
      const result = await getMyTweets()
      setTweets(result)
    }

    getTweets()
  }, [])

  const displayTweets = () => {
    const result = tweets.map((tweet) => {
      return (
        <TweetCard key={tweet.id } data={tweet} />
      )
    })
    return result
  }

  return (
    <div>
      { displayTweets() }
    </div>
  )
}

export default MyTweets