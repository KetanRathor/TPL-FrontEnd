import { Box,Typography } from '@mui/material'
import dashboard from "../Dashboard/Images/Dashboard.svg"
import dasboardClicked from "../Dashboard/Images/Dashboard-active.svg"
import projectList from "../Dashboard/Images/Project-list.svg"
import projectListClicked from "../Dashboard/Images/Project-list-active.svg"
import createProject from "../Dashboard/Images/create-project.svg"
import createProjectClicked from "../Dashboard/Images/create-project-active.svg"
import headerImage from "../Dashboard/Images/Header-bg.svg"
import logo from "../Dashboard/Images/Logo.svg"
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useLocation, useNavigate } from 'react-router-dom'
import logOut from "../Dashboard/Images/Logout.svg"
import UseReponsive from '../Hooks/UseResponsive'
import { useTheme } from '@mui/material/styles';




function SideBar() {
    const theme = useTheme()
    const navigate = useNavigate()
    const responsive = UseReponsive();
    
    const location = useLocation();

    const isIconActive = (iconName) => {
      if (iconName === 'dashboard' && location.pathname === '/Dashboard') {
        return true;
      }
      if (iconName === 'createProject' && location.pathname === '/Dashboard/OnboardProject') {
        return true;
      }
      if (iconName === 'projectList' && location.pathname === '/Dashboard/projectList') {
        return true;
      }

      return false;
    };
  

    const handleDashboardClick = () => {
      navigate('/Dashboard');
    };
  
    const handleCreateProjectClick = () => {
      navigate('/Dashboard/OnboardProject');
    };

    function handleProjectListClick() {
      navigate("/Dashboard/projectList");
    }

    const handleLogoutClick = () => {
      localStorage.removeItem("authToken");
      navigate("/");
    };
  

    const handleBackButtonClick = () => {
      navigate(-1); 
  };

    let title;
    if (isIconActive('dashboard')) {
        title = 'Dashboard';
    } else if (isIconActive('createProject')) {
        title = 'Create Project';
    } else if (isIconActive('projectList')) {
        title = 'Project Listing';
    }

    
  return (
    <>
    
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Sidebar for laptops (left side) */}
      <Box
  sx={{
    width: {
      xs: "100%",
      md: "4%",
    },
    height: { xs: "50px", md: "auto" },
    display: { 
      xs: "none",
       md: "flex" },
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 2,
    overflow: "auto",
  }}
>
<Box sx={{ flexGrow: 1 }} />
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 2,
      width:"100%"
    }}
  >
    <Box onClick={handleDashboardClick} sx={{ cursor: "pointer",width:"100%", display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // borderLeft: "5px solid black", // Adds a 1px solid black left border
      }}>
      <img
        src={isIconActive("dashboard") ? dasboardClicked : dashboard}
        alt="Dashboard"
      />
    </Box>
    <Box onClick={handleCreateProjectClick} sx={{ cursor: "pointer" }}>
      <img
        src={
          isIconActive("createProject")
            ? createProjectClicked
            : createProject
        }
        alt="Create Project"
      />
    </Box>
    <Box onClick={handleProjectListClick} sx={{ cursor: "pointer" }}>
      <img
        src={isIconActive("projectList") ? projectListClicked : projectList}
        alt="Project List"
      />
    </Box>
    
  </Box>
  <Box sx={{ flexGrow: 1 }} />
  <Box onClick={handleLogoutClick} sx={{ cursor: "pointer", mb: 2 }}>
    <img src={logOut} alt="Logout" />
  </Box>
</Box>

<Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: theme.palette.secondary.main,
        // position: "relative",
      }}
    >
      <img
        src={headerImage}
        alt="Menu"
        style={{
          width: "100%",
          zIndex: -1,
        }}
      />
      {/* // dont show logo in tablet// */}
      {!responsive.isTablet && (
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)", 
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "55px", 
            }}
          />
        </Box>
      )}
    </Box>
      <Box
        sx={{
          position: "absolute",
          top: 35,
          left: 60,
          display: "flex",
          alignItems: "center",
          textAlign:"center"
        }}
      >
        {/* Back Icon */}
        <IconButton onClick={handleBackButtonClick}>
          {/* {" "} */}
          {/* Wrap the icon in IconButton for button functionality */}
          <ArrowBackIosNewIcon sx={{ color: "white", fontSize: "medium" }} />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ color: "white", ml: 1, fontWeight: "bold" }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
    </>
  );
}

export default SideBar
