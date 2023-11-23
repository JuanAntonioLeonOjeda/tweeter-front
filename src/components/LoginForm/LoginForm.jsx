import './LoginForm.css'

import { useState } from "react";

import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions
} from "@mui/material";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <Button color="success">
          Login
        </Button>
      </CardActions>
    </Card>
  );
}

export default LoginCard;
