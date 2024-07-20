// import React from 'react'
// import headerImage from "../Components/Dashboard/Images/Header-bg.svg"
// function MobileHedear() {
//   return (
//     <>
//     <div style={{ position: "fixed", top: 0, zIndex: 1,overflow:"hidden" }}>
//     <img src={headerImage} alt="Project Image" style={{ width: "100%" }} />
    
//   </div>
  
  
//     </>
//   )
// }

// export default MobileHedear


import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import headerImage from "../Components/Dashboard/Images/Header-bg.svg"
import logOut from "../Components/Dashboard/Images/Logout.svg"
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


function MobileHeader() {
  const navigate = useNavigate();
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

  let title;
  if (isIconActive('dashboard')) {
    title = 'Dashboard';
  } else if (isIconActive('createProject')) {
    title = 'Create Project';
  } else if (isIconActive('projectList')) {
    title = 'Project Listing';
  }

  const handleLogoutClick = () => {
    localStorage.removeItem('authToken'); 
    navigate("/");
}

  const handleBackButtonClick = () => {
    navigate(-1);
  }

  return (
    <>
      <div style={{ position: "fixed",top:0, zIndex:1}}>
        <img src={headerImage} alt="Header Background" style={{ width: "100%" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          textAlign:"center",
            paddingLeft: "16px", 
            top:"8px", 
            paddingRight:"8px" 
            // paddingLeft:"16px"
            // Adjust padding as needed
          }}
        >
          <Box
          sx={{display: "flex"}}
          >
          <IconButton onClick={handleBackButtonClick}>
          {/* {" "} */}
          {/* Wrap the icon in IconButton for button functionality */}
          <ArrowBackIosNewIcon sx={{ color: "white", fontSize: "medium" }} />
        </IconButton>
          <Typography variant="h5" sx={{  color:'white' }}>
            {title}
          </Typography>
          </Box>
          <IconButton onClick={handleLogoutClick}>
            <img src={logOut} alt="Logout" style={{ width: "24px", height: "24px",marginLeft:"8px" }} />
          </IconButton>
          
        </div>
      </div>
    </>
  )
}

export default MobileHeader

// import React from 'react';
// import { Box, Typography, IconButton } from '@mui/material';
// import headerImage from "../Components/Dashboard/Images/Header-bg.svg";
// import logOut from "../Components/Dashboard/Images/Logout.svg";
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function MobileHeader() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isIconActive = (iconName) => {
//     if (iconName === 'dashboard' && location.pathname === '/Dashboard') {
//       return true;
//     }
//     if (iconName === 'createProject' && location.pathname === '/Dashboard/OnboardProject') {
//       return true;
//     }
//     if (iconName === 'projectList' && location.pathname === '/Dashboard/projectList') {
//       return true;
//     }
//     return false;
//   };

//   let title;
//   if (isIconActive('dashboard')) {
//     title = 'Dashboard';
//   } else if (isIconActive('createProject')) {
//     title = 'Create Project';
//   } else if (isIconActive('projectList')) {
//     title = 'Project Listing';
//   }

//   const handleLogoutClick = () => {
//     navigate("/");
//   }

//   return (
//     <>
//       <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
//         <img src={headerImage} alt="Header Background" style={{ width: "100%" }} />
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             zIndex: 1,
//             width: "100%",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             textAlign: "center",
//             paddingLeft: "16px",
//             top: "8px",
//             paddingRight: "8px"
//           }}
//         >
//           <Typography variant="h5" sx={{ color: 'white' }}>
//             {title}
//           </Typography>
//           <IconButton onClick={handleLogoutClick}>
//             <img src={logOut} alt="Logout" style={{ width: "24px", height: "24px", marginLeft: "8px" }} />
//           </IconButton>
//         </div>
//       </div>
//     </>
//   )
// }

// export default MobileHeader;
