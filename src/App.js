import { Route, Routes } from "react-router-dom";
import ProjectForm from "./Components/Dashboard/CreateProject";
import Dashboard from "./Components/Dashboard/Dashboard";
import LoginPage from "./Components/LoginPage/LoginPage";
import ProjectList from "./Components/Dashboard/ProjectList";
import MobileLoginPage from "./Components/LoginPage/MobileLoginPage";
import UseReponsive from "./Components/Hooks/UseResponsive";
import MobileCreateProject from "./MobileDashboard/MobileCreateProject";
import MobileDashboard from "./MobileDashboard/MobileDasboard";
import MobileProjectList from "./MobileDashboard/MobileProjectList";
import { jwtDecode } from "jwt-decode";
import theme from "./Components/Hooks/Theme";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";


const isTokenValid = () => {
  const token = localStorage.getItem("authToken");
  try {
    const decodedToken = jwtDecode(token);
    console.log(token)
    // role=decodedToken.role
    // id=decodedToken.id
    console.log("defg",decodedToken)
    const currentTime = Date.now() / 1000; 
    if (decodedToken.exp && decodedToken.exp < currentTime) {
      return false;
    }
    return true; 
  } catch (error) {
    return false; 
  }
};


function App() {
  
  const [logedInUser, setLogedInUser] = useState("");
  
  
  
  function onSignIn(email) {
    setLogedInUser(email);
    console.log(logedInUser)
  }
  let responsive = UseReponsive();
  return (
    // <>
    // <MobileCreateProject/>
    // </>
    <ThemeProvider theme={theme}>

    <div className="App">
      <Routes>
      <Route
        path="/"
        element={
          responsive.isDesktop || responsive.isLaptop || responsive.isTablet ? (
            <LoginPage
            onSignIn={onSignIn}
            />
          ) : (
            <MobileLoginPage
            
            onSignIn={onSignIn}
               />
          )
        }
      /> 
        <Route path="/Dashboard/*" element={isTokenValid() ? <DashboardLayout /> : <NotAuthenticated/>} />
        
      </Routes>
    </div>
    </ThemeProvider>
  );
}

function NotAuthenticated() {
  return (
    <div
    style={{display:"flex",
      justifyContent: "center", 
    alignItems: "center", 
    height:"100vh",
    width:"100vw"

    }}
    >
      
     Not Authenticated
    </div>
  );
}

function DashboardLayout() {

  let responsive = UseReponsive();

  return (
    
        <Routes>
          
          <Route
        path="/"
        element={
          responsive.isDesktop || responsive.isLaptop  || responsive.isTablet ? (
            <Dashboard/>
          ) : (
            <MobileDashboard />
          )
        }
      /> 
          
          <Route
        path="OnboardProject"
        element={
          responsive.isDesktop || responsive.isLaptop ? (
            <ProjectForm/>
          ) : (
            <MobileCreateProject />
          )
        }
      /> 
         
          <Route
        path="projectList"
        element={
          responsive.isDesktop || responsive.isLaptop ? (
            <ProjectList/>
          ) : (
            <MobileProjectList />
          )
        }
      /> 
        </Routes>
    
  );
}





export default App;
