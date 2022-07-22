import {
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  TextField,
  Box,
  IconButton,
  Button,
  Checkbox,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React, { useState } from "react";

import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [visable, setvisable] = useState(false);
  const [agreed, setagreed] = useState(false);

  const Navigate = useNavigate();

  const ToggleBtn = () => {
    setvisable((PreState) => !PreState);
  };

  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [emailError, setemailError] = useState("");

  const [passwordError, setpasswordError] = useState("");
  const [error, seterror] = useState("");
  const { SignUp } = useUserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    seterror("");
    try {
      await SignUp(Email, password);
      Navigate("/login")
    } catch (err) {
      seterror(err.message);
    }
  };

  const emailValidator = () => {
    Email === "" ? setemailError("Email is  Required") : setemailError("");
  };
  const passwordValidator = () => {
    password === ""
      ? setpasswordError("Password is Required")
      : setpasswordError("");
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={8} lg={4} md={12} sx={{ margin: "auto" }}>
          <Container sx={{ marginTop: "100px", minWidth: "275px" }}>
            <Card
              sx={{ marginTop: "40%", margin: "auto", py: "30px" }}
              elevation="4"
            >
              <CardContent>
                <Typography variant="h6" textAlign="center" fontWeight="bold">
                  Signup
                </Typography>
                {error && (
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      color: "red",
                      fontSize: "14px",
                      background: "#ffcccc",
                      padding: "16px",
                      marginLeft:'30px',
                      marginRight:'30px',
                      marginTop:'10px'
                    }}
                  >
                    {error}
                  </Typography>
                )}
              </CardContent>
              <Container
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <Container>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      mb: "30px",
                    }}
                  >
                    {/* <TextField
                      label="userName"
                      variant="outlined" 
                      sx={{ mb: "30px" }}
                      name="userName"
                      type="text"
                      value={values.userName}
                      onChange={handleChange}
                    /> */}
                    <TextField
                      label="Email"
                      variant="outlined"
                      sx={{ mb: "30px" }}
                      type="text"
                      name="email"
                      // placeholder="Enter Email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={emailValidator}
                    />
                    <Typography
                      sx={{
                        color: "red",
                        fontSize: "10px",
                        mt: "-23px",
                        mb: "10px",
                      }}
                    >
                      {emailError}
                    </Typography>
                    <TextField
                      label="Password"
                      variant="outlined"
                      type={visable ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      onBlur={passwordValidator}
                    />
                  </Box>
                  <IconButton
                    onClick={ToggleBtn}
                    sx={{
                      position: "relative",
                      top: "-76px",
                      left: "86%",
                    }}
                  >
                    {visable ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                  <Typography
                    sx={{
                      color: "red",
                      fontSize: "10px",
                      position: "relative",
                      top: "-64px",
                    }}
                  >
                    {passwordError}
                  </Typography>
                  {/* <Button
                    variant="text"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      position: "relative",
                      top: "-65px",
                      textTransform: "lowercase",
                      borderBottom: "1px",
                      with: "100px",
                    }}
                    LinkComponent={Link}
                    to="/forgotpassword"
                  >
                    forgot Password
                  </Button> */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      mt: "-50px",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      value={agreed}
                      onChange={() => setagreed(!agreed)}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        margin: "0",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px" }}>
                      I Accept Terms And Conditions
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      mt: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: agreed ? "#004080" : "#cccccc",
                        textTransform: "capitalize",
                      }}
                      disabled={!agreed}
                      onClick={handleSubmit}
                    >
                      SignUp
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>You have an account yet?</Typography>
                    <Button
                      variant="text"
                      sx={{ fontSize: "14px" }}
                      LinkComponent={Link}
                      to="/login"
                    >
                      Login
                    </Button>
                  </Box>
                </Container>
              </Container>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
