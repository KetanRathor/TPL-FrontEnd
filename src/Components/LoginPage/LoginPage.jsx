import React, { useState } from 'react'
import { Box, Grid, TextField, Button, Typography, Container, Card, CardContent, InputAdornment, IconButton  } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import bgImage from "../LoginPage/login-bg-1 (1).svg"
import { useNavigate } from 'react-router-dom';
import logo from "../Dashboard/Images/Logo.svg"
import {login} from"../../APIs/auth"



    function LoginPage() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [emailError, setEmailError] = useState("");
        const [passwordError, setPasswordError] = useState("");
        const [showPassword, setShowPassword] = useState(false);
        const navigate = useNavigate()
        
      
        const handleEmailChange = (event) => {
          setEmail(event.target.value);
          setEmailError("");
        };
      
        const handlePasswordChange = (event) => {
          setPassword(event.target.value);
          setPasswordError("");
        };

        const handleClickShowPassword = () => {
          setShowPassword(!showPassword);
        };
      
        const handleMouseDownPassword = (event) => {
          event.preventDefault();
        };
      

        const handleSubmit = async (event) => {
          event.preventDefault();
          setEmailError("");
          setPasswordError("");
  
          if (!email) {
              setEmailError("Please enter email");
              return;
          }
          if (!password) {
              setPasswordError("Please enter a password");
              return;
          }
  
          try {
              const auth = await login({ email, password });
              if (auth) {
                  console.log("Login successful", email);
                  navigate("/Dashboard");
              } else {
                  setPasswordError("Invalid email or password");
              }
          } catch (error) {
              console.error("Error occurred during login:", error);
              setPasswordError("Invalid email or password");
              // Handle login error if needed
          }
      };
  return (
    <Box overflow="hidden" position="relative" height="100vh">
      <img
        src={bgImage}
        alt="Menu"
        style={{
          zIndex: -1,
          objectFit: "cover",
          width: "100%",
          height: "65%",
          position: "absolute",
          borderBottomLeftRadius: "50px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "60px",
            marginBottom: "10px",
          }}
        />
        <Typography fontSize={"15px"} color={"white"}>
          Online Project Management
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "27%",
          left: "50%",
          transform: "translateX(-50%)",
          // width: '100%',
          maxWidth: "xs",
          zIndex: 1,
          overflowY: "hidden",
          height: "90%",
        }}
      >
        <Container maxWidth="xs">
          <Card elevation={8} sx={{ height: "65vh", borderRadius: "10px" }}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Typography
                  variant="h6"
                  align="center"
                  mb={2}
                  mt={3}
                  fontWeight="bold"
                  color="grey"
                >
                  Login to get started
                </Typography>
                <Grid
                  container
                  spacing={1}
                  item
                  md={11}
                  marginLeft={0.7}
                  marginRight={0.7}
                >
                  <Grid item xs={12}>
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleEmailChange}
                      error={Boolean(emailError)}
                      helperText={emailError}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: "40px", 
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <TextField
                      fullWidth
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                      error={Boolean(passwordError)}
                      helperText={passwordError}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: "40px", // Adjust the height as needed
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container gap={2}>
                  <Grid item xs={12} textAlign="right">
                    <Button
                      disableRipple
                      sx={{
                        "&:hover": { backgroundColor: "transparent" },
                        cursor: "pointer",
                        textTransform: "none",
                      }}
                    >
                      Forget password?
                    </Button>
                  </Grid>
                  <Grid item xs={12} display="flex" justifyContent="center">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{
                        textTransform: "none",
                        borderRadius: "100px",
                        width: "40%",
                      }}
                    >
                      Sign In
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Container>
        {Boolean(passwordError || emailError) && (
          <Typography
            variant="body2"
            color="error"
            align="center"
            sx={{ mt: 2 }}
          >
            Invalid credentials
          </Typography>
        )}
      </Box>
    </Box>
  );
  }


export default LoginPage







    



    
