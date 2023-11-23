import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions
} from "@mui/material"

import { login } from '../../services/authService'

import './LoginForm.css'

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      const payload = {
        email,
        password
      }
      const result = await login(payload)
      if (result === 200) {
        navigate('/profile')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card sx={{ width: "50%" }}>
      <CardHeader title="Login" />
      <CardContent>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth={true}
        />
      </CardContent>
      <Divider />
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button>Register</Button>
        <Button color="success" onClick={ handleClick }>
          Login
        </Button>
      </CardActions>
    </Card>
  );
}

export default LoginCard;
