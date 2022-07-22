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
import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [visable, setvisable] = useState(false);
  const [agreed, setagreed] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const Navigate = useNavigate();
  const { SignIn } = useUserAuth();

  const [error, seterror] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    seterror("");
    try {
      await SignIn(email, password);
      Navigate("/");
    } catch (err) {
      seterror(err.message);
    }
  };
  useEffect(() => {
    setIsLoading(false)
  }, []);

  const emailValidator = () => {
    email === "" ? setemailError("Email is required") : setemailError("");
  };

  const passwordValidator = () => {
    password === ""
      ? setpasswordError("Password is required")
      : setpasswordError("");
  };
  const ToggleBtn = () => {
    setvisable((PreState) => !PreState);
  };
  return (
    <>
      {isLoading ? (
        <Typography>Loading....</Typography>
      ) : (
        <Box>
          <Grid container>
            <Grid item xs={12} sm={8} lg={4} md={12} sx={{ margin: "auto" }}>
              <Container sx={{ marginTop: "40px", minWidth: "275px" }}>
                <Card
                  sx={{ marginTop: "40%", margin: "auto", py: "30px" }}
                  elevation="4"
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      fontWeight="bold"
                    >
                      Login
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
                          marginLeft: "30px",
                          marginRight: "30px",
                          marginTop: "10px",
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
                        <TextField
                          label="Email"
                          variant="outlined"
                          sx={{ mb: "30px" }}
                          name="email"
                          type="text"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          onBlur={emailValidator}
                        />
                        <Typography
                          variant="h6"
                          sx={{ color: "red", fontSize: "10px", mt: "-23px" }}
                        >
                          {emailError}
                        </Typography>
                        <TextField
                          label="Password"
                          variant="outlined"
                          type={visable ? "text" : "password"}
                          name="Password"
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                          onBlur={passwordValidator}
                          sx={{ mt: "10px" }}
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
                        variant="h6"
                        sx={{
                          color: "red",
                          position: "relative",
                          top: "-64px",
                          fontSize: "10px",
                        }}
                      >
                        {passwordError}
                      </Typography>
                      <Button
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
                      </Button>
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
                          Login
                        </Button>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography>Don't have an account yet?</Typography>
                        <Button
                          variant="text"
                          sx={{ fontSize: "14px" }}
                          LinkComponent={Link}
                          to="/signup"
                        >
                          SignUp
                        </Button>
                      </Box>
                    </Container>
                  </Container>
                </Card>
              </Container>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Login;
