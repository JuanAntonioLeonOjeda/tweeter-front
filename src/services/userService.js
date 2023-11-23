import app from "./config";

const getProfile = async () => {
  try {
    const { data } = await app.get('/user/profile', {
      headers: {
        authorization: localStorage.token
      }
    })
  } catch (error) {
    console.log(error)
  }
} 