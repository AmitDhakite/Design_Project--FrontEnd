import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "../../axios.js";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [user, setUser] = useState({
    role: "IC",
    name: "",
    instituteEmail: "",
    instituteName: "",
    contact: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser((p) => {
      return { ...p, [name]: value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // if (
    //   user.role === "" ||
    //   user.name === "" ||
    //   user.instituteEmail === "" ||
    //   user.instituteName === "" ||
    //   user.contact === "" ||
    //   user.password === ""
    // ) {
    // setShowNotFilledMessage(true);
    // setShowMessage(false);
    // return;
    // } else setShowNotFilledMessage(false);
    // setLoading(true);
    console.log(user);
    try {
      const res = await axios.post("/register", user);
      console.log(res.data);
      // if (res.data === "User already exists") {
      //   // setLoading(false);
      //   // setShowMessage(true);
      // } else history.push("/login?registered=true");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <h1>IIEC PORTAL</h1>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form
          onChange={inputChangeHandler}
          onSubmit={submitHandler}
          className={classes.form}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="institute"
            label="Name"
            name="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="institute"
            label="Institute Name"
            name="instituteName"
            autoComplete="institute"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="instituteId"
            label="Institute ID"
            id="instituteId"
            autoComplete="instituteId"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="instituteEmail"
            label="Institute Email"
            id="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="contact"
            label="Contact"
            id="email"
            autoComplete="phone"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            label="Password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "rgb(64,80,181)", color: "white" }}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs></Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
