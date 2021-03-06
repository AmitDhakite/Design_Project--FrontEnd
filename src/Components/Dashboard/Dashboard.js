import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MainListItems, { secondaryListItems } from "./listItems";
import Course from "./Course";
import axios from "../../axios";
import Button from "@mui/material/Button";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [showForm, setShowForm] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [courses, setCourses] = useState();

  useEffect(async () => {
    try {
      const res = await axios.get("/getCourses");
      setCourses(res.data);
      console.log(res.data);
    } catch (er) {
      console.log(er);
    }
  }, []);

  const [el2, setEl2] = React.useState("");
  const handleChange = (event) => {
    setEl2(event.target.value);
  };

  const [el1, setEl1] = React.useState("");

  const handleChange1 = (event) => {
    setEl1(event.target.value);
  };

  const submitElectives = async () => {
    console.log(el1, el2);
    try {
      const res = await axios.post("/addElectives", {
        userId: localStorage.getItem("userId"),
        el1,
        el2,
      });
      setShowForm(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              IIEC
            </Typography>
            {localStorage.getItem("name")}
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <MainListItems page="0" />
          </List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                {!showForm && (
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h2>
                      Available Courses:{" "}
                      <Button
                        style={{ marginLeft: "350px" }}
                        variant="contained"
                        width="50px"
                        disableElevation
                        onClick={() => {
                          setShowForm(true);
                        }}
                      >
                        Select Electives
                      </Button>
                    </h2>
                    {courses?.map((c) => {
                      return <Course data={c} />;
                    })}
                  </Paper>
                )}
                {showForm && (
                  <Paper
                    sx={{
                      p: 2,
                    }}
                  >
                    <h2>
                      Select Elective Courses:{" "}
                      <Button
                        style={{ marginLeft: "350px" }}
                        variant="contained"
                        width="50px"
                        disableElevation
                        onClick={() => {
                          setShowForm(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </h2>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Elective 1
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={el1}
                          label="Elective 1"
                          onChange={handleChange1}
                        >
                          {courses.map((c) => {
                            return <MenuItem value={c.name}>{c.name}</MenuItem>;
                          })}
                        </Select>
                      </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120 }} style={{ marginTop: "50px" }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Elective 2
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={el2}
                          label="Elective 2"
                          onChange={handleChange}
                        >
                          {courses.map((c) => {
                            return <MenuItem value={c.name}>{c.name}</MenuItem>;
                          })}
                        </Select>
                      </FormControl>
                    </Box>
                    <Button
                      style={{ marginLeft: "0px", marginTop: "10px" }}
                      variant="contained"
                      width="50px"
                      disableElevation
                      onClick={submitElectives}
                    >
                      Submit
                    </Button>
                  </Paper>
                )}
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
