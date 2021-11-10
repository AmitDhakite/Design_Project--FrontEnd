import React, { Fragment, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, useHistory } from "react-router-dom";
import axios from "../../axios";
import Alert from "../Layout/Alert";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Design Project
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
  const classes1 = useStyles();

  const history = useHistory();
  const [showMessage, setShowMessage] = useState(false);
  const [user, setUser] = useState({
    instituteEmail: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((p) => {
      return { ...p, [name]: value };
    });
  };

  const login = async (e) => {
    e.preventDefault();
    console.log(user);
    if (user.instituteEmail === "" || user.password === "") {
      return;
    }
    try {
      const res = await axios.post("/login", user);
      console.log(res.data);
      if (res.data === "Wrong Credentials") {
        setShowMessage(true);
      } else {
        localStorage.setItem("userId", res.data._id);
        localStorage.setItem("name", res.data.name);
        history.push("/dashboard");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes1.paper}>
        <Avatar className={classes1.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <h1>IIEC PORTAL</h1>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form
          className={classes1.form}
          noValidate
          onChange={changeHandler}
          onSubmit={login}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="instituteEmail"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {showMessage && (
            <Alert color="red" message="Invalid Email or Password!" />
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "rgb(64,80,181)", color: "white" }}
            className={classes1.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/Register" variant="body2">
                {"Don't have an account? Register here"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
