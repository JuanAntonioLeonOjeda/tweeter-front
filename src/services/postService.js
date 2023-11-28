import app from './config'
import jsonpl from './postConfig'

const getMyTweets = async () => {
  try {
    const { data } = await app.get('/user/profile', {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    return data.posts
  } catch (error) {
    console.error(error)
  }
} 

const getDashboardTweets = async () => {
  try {
    const { data } = await jsonpl.get('')
    return data
  } catch (error) {
    console.error(error)
  }
}

export {
  getMyTweets,
  getDashboardTweets
}