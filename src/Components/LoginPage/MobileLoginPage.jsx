import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import bgImage from "../LoginPage/login-bg-1 (1).svg";
import { useNavigate } from "react-router-dom";
import logo from "../Dashboard/Images/Logo.svg"
import { login } from "../../APIs/auth";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function MobileLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [emailError, setEmailError] = useState("");
        const [passwordError, setPasswordError] = useState("");
        const [showPassword, setShowPassword] = useState(false);
        
        
      
        const handleEmailChange = (event) => {
          setEmail(event.target.value);
          setEmailError("");
        };
      
        // const handlePasswordChange = (event) => {
        //   setPassword(event.target.value);
        //   setPasswordError("");
        // };

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
        } 
        else {
            setPasswordError("Invalid email or password");
        }
    } catch (error) {
        console.error("Error occurred during login:", error);
        setPasswordError("Invalid email or password");
        // Handle login error if needed
    }
};


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   navigate("/Dashboard")
  //   // Handle form submission
  // };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#f5f5f5",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '45vh',  // Adjusted to 50% of viewport height
          // marginBottom: '10px',
        }}
      >
        <img
          src={bgImage}  // Replace with your image URL
          alt="Login Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',  
            borderBottomLeftRadius: '90px',  
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width:"100%",
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white', // Adjust color as needed
          }}
        >
          <img
            src= {logo}
            alt="Logo"
            style={{
              width: "100", // Adjust size as needed
              marginBottom: '10px',
            }}
          />
          <Typography
            fontSize={"20px"}
            
            // fontWeight="bold"
          >
            Online Project Management
          </Typography>
        </div>
      </div>
      {/* Form box */}
      <Box
        sx={{
          maxWidth: "100%", 
          width: "100%",
          flexGrow: 1,
          marginTop:"15px"
           
        }}
      >
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: "20px",
            maxWidth: "100%", // Example maximum width for responsiveness
            width: "100%",
          }}
        >
          <Typography
            variant="h5"
            mb={5}
            mt={3}
            // fontWeight="bold"
            color="grey"
            //   textAlign="center"
          >
            Login to get started
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
              <label htmlFor="password" className="form-label">Email</label>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      // label="Email"
                      type="email"
                      onChange={handleEmailChange}
                      error={Boolean(emailError)}
                      helperText={emailError}
                    />
              </Grid>
              <Grid item xs={12}>
              {/* <div className="mb-3 position-relative"> */}
                <label htmlFor="password" className="form-label">Password</label>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  error={Boolean(passwordError)}
                  helperText={passwordError}
                  className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {/* {passwordError && <div className="invalid-feedback">{passwordError}</div>} */}
              {/* </div> */}
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} textAlign="right" >
                <Typography color="primary">
                  Forgot password?
                  </Typography>
                {/* </Link> */}
              </Grid>
              {/* <Grid item xs={12} textAlign="right">
                {Boolean(passwordError || emailError) && (
                  <Typography variant="body2" color="error">
                    Invalid credentials
                  </Typography>
                )}
              </Grid> */}
              <Grid item xs={12} mt={6}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ borderRadius: "20px",height:"40px" }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
      <Grid item xs={12} textAlign="right">
                {Boolean(passwordError || emailError) && (
                  <Typography variant="body2" color="error">
                    Invalid credentials
                  </Typography>
                )}
              </Grid>
    </div>
  );
}

export default MobileLoginPage;
