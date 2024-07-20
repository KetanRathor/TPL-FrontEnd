// import { useEffect, useState } from 'react'
// import { Box,Typography } from '@mui/material'
// import dashboard from "../Components/Dashboard/Images/Dashboard.svg"
// import dasboardClicked from "../Components/Dashboard/Images/Dashboard-active.svg"
// import projectList from "../Components/Dashboard/Images/Project-list.svg"

// import projectListClicked from "../Components/Dashboard/Images/Project-list-active.svg"
// import createProject from "../Components/Dashboard/Images/create-project.svg"
// import createProjectClicked from "../Components/Dashboard/Images/create-project-active.svg"


// import { useLocation, useNavigate } from 'react-router-dom'


// function MobileBottom() {

//     const navigate = useNavigate()
    
//     const [activeIcon, setActiveIcon] = useState('');
//     const location = useLocation();

//     const isIconActive = (iconName) => {
//       if (iconName === 'dashboard' && location.pathname === '/Dashboard') {
//         return true;
//       }
//       if (iconName === 'createProject' && location.pathname === '/Dashboard/OnboardProject') {
//         return true;
//       }
//       if (iconName === 'projectList' && location.pathname === '/Dashboard/projectList') {
//         return true;
//       }

//       return false;
//     };
  

//     const handleDashboardClick = () => {
//       navigate('/Dashboard');
//     };
  
//     const handleCreateProjectClick = () => {
//         navigate('/Dashboard/OnboardProject');
//     };

//     function handleProjectListClick (){
// navigate('/Dashboard/projectList')
//     }

//     const handleLogoutClick = ()=> {
//       navigate("/")
//     }

//     let title;
//     if (isIconActive('dashboard')) {
//         title = 'Dashboard';
//     } else if (isIconActive('createProject')) {
//         title = 'Create Project';
//     } else if (isIconActive('projectList')) {
//         title = 'Project Listing';
//     }
//   return (
//     <Box
//       sx={{
//         height:"8vh",
//         width: "100%",
//         display:"flex",
//         justifyContent: "space-around",
//         alignItems: 'center',
//         // justifyContent:"center",
//         gap: 5,
//         overflow: 'auto',
//         position: 'fixed',
//         bottom: 0,
//         left: 0,
        
//         backgroundColor: '#ffffff',
//         padding: '10px',
//       }}
//     >
      
//       <Box
//         sx={{
//           display: 'flex',
//         //   flexDirection: 'column',
//           alignItems: 'center',
//           gap: 2,
//         }}
//       >
//         <Box onClick={handleDashboardClick} sx={{ cursor: 'pointer',font:"30px" }}>
//           <img
//             src={isIconActive('dashboard') ? dasboardClicked : dashboard}
//             alt="Dashboard"
//           />
//         </Box>
//         <Box onClick={handleCreateProjectClick} sx={{ cursor: 'pointer' }}>
//           <img
//             src={
//               isIconActive('createProject')
//                 ? createProjectClicked
//                 : createProject
//             }
//             alt="Create Project"
//           />
//         </Box>
//         <Box onClick={handleProjectListClick} sx={{ cursor: 'pointer' }}>
//           <img
//             src={isIconActive('projectList') ? projectListClicked : projectList}
//             alt="Project List"
//           />
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// export default MobileBottom

import { Box } from '@mui/material';
import dashboard from "../Components/Dashboard/Images/Dashboard.svg";
import dasboardClicked from "../Components/Dashboard/Images/Dashboard-active.svg";
import projectList from "../Components/Dashboard/Images/Project-list.svg";
import projectListClicked from "../Components/Dashboard/Images/Project-list-active.svg";
import createProject from "../Components/Dashboard/Images/create-project.svg";
import createProjectClicked from "../Components/Dashboard/Images/create-project-active.svg";
import { useLocation, useNavigate } from 'react-router-dom';

function MobileBottom() {
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

  const handleDashboardClick = () => {
    navigate('/Dashboard');
  };

  const handleCreateProjectClick = () => {
    navigate('/Dashboard/OnboardProject');
  };

  const handleProjectListClick = () => {
    navigate('/Dashboard/projectList');
  };

  return (

    <div
    style={{height: "8vh",
      width: "100vw",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "end",
      gap: 10, // Adjust gap to spread icons evenly
      overflow: 'auto',
      position: 'fixed',
      bottom: 0,
      // left: 0,
      backgroundColor: '#eeeeee"',
      padding: '0px',
      
    }}
    >
    <div
      style={{
        height: "7.5vh",
        width: "100%",
        
        display: "flex",
        // flexDir
        justifyContent: "space-around",
        alignItems: 'center',
        borderTopLeftRadius:"45px",
        borderTopRightRadius:"45px",
        backgroundColor: 'white',
      // marginBottom: '0px',
      bottom: 0,

        
      }}
    >
      <Box onClick={handleDashboardClick} sx={{ cursor: 'pointer' }}>
        <img
          src={isIconActive('dashboard') ? dasboardClicked : dashboard}
          alt="Dashboard"
          style={{ width: '40px', height: '40px' }} // Increase icon size
        />
      </Box>
      <Box onClick={handleCreateProjectClick} sx={{ cursor: 'pointer' }}>
        <img
          src={isIconActive('createProject') ? createProjectClicked : createProject}
          alt="Create Project"
          style={{ width: '40px', height: '40px' }} // Increase icon size
        />
      </Box>
      <Box onClick={handleProjectListClick} sx={{ cursor: 'pointer' }}>
        <img
          src={isIconActive('projectList') ? projectListClicked : projectList}
          alt="Project List"
          style={{ width: '40px', height: '40px' }} // Increase icon size
        />
      </Box>
    </div>
    </div>
  );
}

export default MobileBottom;

