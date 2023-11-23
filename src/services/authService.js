import app from "./config"

const login = async (body) => {
  try {
    const { data } = await app.post('/auth/login', body)
    localStorage.setItem('token', data.token)
    return 200
  } catch (error) {
    console.log(error.message)
  }
}

export {
  login
}