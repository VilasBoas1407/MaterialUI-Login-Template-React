import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Alerts from "../components/Alerts";

import api from "../service/api";

const theme = createTheme();

export default function Login() {
  const [modal, setModal] = useState({
    open: false,
    message: "",
    type: "error",
  });

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleSubmit() {
    if (form.email === "" || form.password === "") {
      setModal({
        open: true,
        message: "Por favor, preencha todos os campos.",
        type: "error",
      });
    }

    api
      .request({
        method: "POST",
        url: "/auth/login",
        data: {
          email: form.email,
          password: form.password,
        },
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
        }
      })
      .catch((error) => {
        if (error.response.data) {
          setModal({
            open: true,
            message: error.response.data,
            type: "error",
          });
        }
      });
  }

  function handleChangeEmail(event) {
    setForm({ ...form, email: event.target.value });
  }

  function handleChangePassword(event) {
    setForm({ ...form, password: event.target.value });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Bem Vindo
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChangeEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChangePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar de mim"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Logar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Cadastrar-se"}
                </Link>
              </Grid>
            </Grid>
            <br />
            <Alerts config={modal} setConfig={setModal} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
