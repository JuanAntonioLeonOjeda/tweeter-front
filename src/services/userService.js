import app from "./config";

const getProfile = async () => {
  try {
    const { data } = await app.get('/user/profile', {
      headers: {
        authorization: localStorage.token
      }
    })
    localStorage.setItem('role', data.role)
    return data
  } catch (error) {
    console.log(error)
  }
} 

export {
  getProfile
}