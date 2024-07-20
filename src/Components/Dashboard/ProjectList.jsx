// import React, { useEffect, useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Pagination,
//   Typography,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Box, InputAdornment, IconButton
// } from '@mui/material';
// import SideBar from './SideBar';
// import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { Light } from '@mui/icons-material';
// import { lightBlue } from '@mui/material/colors';
// import { useGetProjectQuery,useUpdateStatusMutation } from '../../Store/Slice/apiProjectSlice';

// const priorities = ['High', 'Medium', 'Low'];

// const ProjectList = () => {

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const monthNames = [
//       'January', 'February', 'March', 'April', 'May', 'June', 
//       'July', 'August', 'September', 'October', 'November', 'December'
//     ];
//     const month = monthNames[date.getMonth()];
//     const day = date.getDate();
//     const year = date.getFullYear();
  
//     return `${month} - ${day}, ${year}`;
//   };

//     // const { data: projects = [], error, isLoading } = useGetProjectQuery();
//   const [updateStatus] = useUpdateStatusMutation();
//   const { data: projects = [], error, isLoading, isSuccess, refetch } = useGetProjectQuery();


//   const [searchText, setSearchText] = useState("");
//   const [sortBy, setSortBy] = useState("");
//   const [priorityFilter, setPriorityFilter] = useState('');
//     const [isFocused, setIsFocused] = useState(false);
//     const [page, setPage] = useState(1); 
//     const [filteredProjects, setFilteredProjects] = useState([]);

//     useEffect(() => {
//       setFilteredProjects(
//         projects.filter((project) =>
//           Object.values(project).some(value =>
//             String(value).toLowerCase().includes(searchText.toLowerCase())
//           )
//         )
//       );
//     }, [searchText, projects]);

//     useEffect(() => {
//       if (priorityFilter) {
//         setFilteredProjects(prevProjects =>
//           prevProjects.filter(project => project.priority === priorityFilter)
//         );
//       } else {
//         setFilteredProjects(projects);
//       }
//     }, [priorityFilter, projects]);

//     const handlePriorityChange = (event) => {
//       setPriorityFilter(event.target.value);
//     };
  
//     const handlePageChange = (event, value) => {
//       setPage(value);
//     };


    
  
//     const handleFocus = () => {
//       setIsFocused(true);
//     };
  
//     const handleBlur = () => {
//       if (searchText === '') {
//         setIsFocused(false);
//       }
//     };
  
//     const handleClear = () => {
//       setSearchText('');
//       setIsFocused(false);
//     };
    

//   const handleStatusUpdate = async (projectId, newStatus) => {
//     try {
//       // Trigger the mutation to update status
//       await updateStatus({ id: projectId, updatedProjectDetails: { status: newStatus } });
//       // Refetch data after updating status
//       refetch();
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };
  
//     //calulation for pagination//
//     const rowsPerPage = 10;
//     const startIndex = (page - 1) * rowsPerPage;
//     const endIndex = startIndex + rowsPerPage;
    
//   return (
//     <Box>
//         <SideBar/>
//         <Box
//         sx={{
//         width: "93%",
//         height: { xs: '100%', md: '80%' },
//         ml: "10px",
//         top: "20%",
//         left: "5%",
//         position: "absolute",
//         zIndex: 1,
//         overflowY: 'auto' ,
//         '&::-webkit-scrollbar': {
//         width: '2px' , 
//         background: 'transparent',
//       },
      
//         }}
//         >
//     <Paper
    
//     >
//       <TableContainer>
//         <Box
//         sx={{
//             display:"flex",
//             flexDirection:"row",
//             justifyContent:"space-between"
            
//         }}
//         >
//          <TextField
         
//       variant="standard"
//       size="small"
//       value={searchText}
//       onChange={(e) => setSearchText(e.target.value)}
//       onFocus={handleFocus}
//       onBlur={handleBlur}
//       placeholder="Search"
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             {/* {isFocused &&  <SearchIcon />} */}
//           </InputAdornment>
//         ),
//         endAdornment: isFocused && (
//           <InputAdornment position="end">
//             <IconButton onClick={handleClear} size="5px">
//               <CloseIcon />
//             </IconButton>
//           </InputAdornment>
//         ),
//       }}
//       style={{ margin: '10px', width: '200px' }}
//     />
//         <Box display="flex" alignItems="center" margin="10px">
//       <InputLabel style={{ marginRight: '10px', fontSize:"13px" }}>Sort By:</InputLabel>
//       <FormControl style={{ minWidth: 100 }}>
//         <Select
//         //   defaultValue="Priority"
//         // placeholder='Priority'
//         displayEmpty
//           variant="standard"
//           // value={sortBy}
//           value={priorityFilter}
//                   onChange={handlePriorityChange}
          
//           style={{ borderBottom: 'none' }} // Remove outline box
//           MenuProps={{
//             getContentAnchorEl: null,
//             anchorOrigin: {
//               vertical: 'bottom',
//               horizontal: 'left',
//             },
//           }}
//         >
//           <MenuItem disabled value="">
//                   Priority
//                 </MenuItem>
//                 {priorities.map((option) => (
//                   <MenuItem key={option} value={option}>
//                     {option}
//                   </MenuItem>
//                 ))}
//               </Select>
//       </FormControl>
//     </Box>
//         </Box>
//         {filteredProjects && filteredProjects.length > 0 ? (
//             <Table>
//               <TableHead sx={{ bgcolor: '#b3e5fc',position: "sticky" }}>
//                 <TableRow>
//                   <TableCell>Project Name</TableCell>
//                   <TableCell>Reason</TableCell>
//                   <TableCell>Type</TableCell>
//                   <TableCell>Division</TableCell>
//                   <TableCell>Category</TableCell>
//                   <TableCell>Priority</TableCell>
//                   <TableCell>Dept.</TableCell>
//                   <TableCell>Location</TableCell>
//                   <TableCell>Status</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredProjects.slice(startIndex, endIndex).map((project, index) => (
//                   <TableRow key={index}>
//                     <TableCell style={{ verticalAlign: 'top',fontWeight:"bold" }}>{project.project_theme}
//       <Typography style={{ fontSize: "10px",verticalAlign: 'bottom' }}>
//         {formatDate(project.start_date)} to {formatDate(project.end_date)}
//       </Typography>
//     </TableCell>
//     <TableCell style={{ verticalAlign: 'top' }}>{project.reason}</TableCell>
//     <TableCell style={{ verticalAlign: 'top' }}>{project.type}</TableCell>
//     <TableCell style={{ verticalAlign: 'top' }}>{project.division}</TableCell>
//     <TableCell style={{ verticalAlign: 'top' }}>{project.category}</TableCell>
//     <TableCell style={{ verticalAlign: 'top' }}>{project.priority}</TableCell>
//     <TableCell style={{ verticalAlign: 'top' }}>{project.department}</TableCell>
//     <TableCell style={{ verticalAlign: 'top' }}>{project.location}</TableCell>
//     <TableCell style={{ verticalAlign: 'top' }}>
//       <Typography variant="body2" style={{ fontWeight: 'bold' }}>
//         {project.status}
//       </Typography>
//     </TableCell>
//     <TableCell style={{ verticalAlign: 'top' }}>
//       <Button
//         variant="contained"
//         color="primary"
//         style={{ borderRadius: '30px', fontSize: '9px', marginBottom: '5px' }}
//         onClick={() => handleStatusUpdate(project.id, 'Running')}
//       >
//         Start
//       </Button>
//       <Button
//         variant="outlined"
//         color="primary"
//         style={{ borderRadius: '30px', fontSize: '9px', marginBottom: '5px', marginLeft: '5px' }}
//         onClick={() => handleStatusUpdate(project.id, 'Closed')}
//       >
//         Close
//       </Button>
//       <Button
//         variant="outlined"
//         color="primary"
//         style={{ borderRadius: '30px', fontSize: '9px', marginBottom: '5px', marginLeft: '5px' }}
//         onClick={() => handleStatusUpdate(project.id, 'Cancelled')}
//       >
//         Cancel
//       </Button>
//     </TableCell>
//                   </TableRow>
                  
//                 ))}
//               </TableBody>
//             </Table>
//           ) : (
//             <Typography variant="body2" style={{ padding: '20px' }}>
//               No projects found.
//             </Typography>
//           )}

//       </TableContainer>
//           <Pagination
//             count={Math.ceil(projects.length / rowsPerPage)} 
//             page={page}
//             onChange={handlePageChange} 
//             sx={{ margin: '20px', display: 'flex', justifyContent: 'center',}}
//           />
//     </Paper>
//     </Box>
//     </Box>
//   );
// };

// export default ProjectList;



// import React, { useEffect, useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Pagination,
//   Typography,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Box, InputAdornment, IconButton
// } from '@mui/material';
// import SideBar from './SideBar';
// import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { Light } from '@mui/icons-material';
// import { lightBlue } from '@mui/material/colors';
// import { useGetProjectQuery,useUpdateStatusMutation } from '../../Store/Slice/apiProjectSlice';

// const priorities = ['High', 'Medium', 'Low'];

// const ProjectList = () => {

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const monthNames = [
//       'January', 'February', 'March', 'April', 'May', 'June', 
//       'July', 'August', 'September', 'October', 'November', 'December'
//     ];
//     const month = monthNames[date.getMonth()];
//     const day = date.getDate();
//     const year = date.getFullYear();
  
//     return `${month} - ${day}, ${year}`;
//   };

//     // const { data: projects = [], error, isLoading } = useGetProjectQuery();
//   const [updateStatus] = useUpdateStatusMutation();
//   const { data: projects = [], error, isLoading, isSuccess, refetch } = useGetProjectQuery();


//   const [searchText, setSearchText] = useState("");
//   const [sortBy, setSortBy] = useState("");
//   const [priorityFilter, setPriorityFilter] = useState('');
//     const [isFocused, setIsFocused] = useState(false);
//     const [page, setPage] = useState(1); 
//     const [filteredProjects, setFilteredProjects] = useState([]);

//     useEffect(() => {
//       setFilteredProjects(
//         projects.filter((project) =>
//           Object.values(project).some(value =>
//             String(value).toLowerCase().includes(searchText.toLowerCase())
//           )
//         )
//       );
//     }, [searchText, projects]);

//     useEffect(() => {
//       if (priorityFilter) {
//         setFilteredProjects(prevProjects =>
//           prevProjects.filter(project => project.priority === priorityFilter)
//         );
//       } else {
//         setFilteredProjects(projects);
//       }
//     }, [priorityFilter, projects]);

//     const handlePriorityChange = (event) => {
//       setPriorityFilter(event.target.value);
//     };
  
//     const handlePageChange = (event, value) => {
//       setPage(value);
//     };


    
  
//     const handleFocus = () => {
//       setIsFocused(true);
//     };
  
//     const handleBlur = () => {
//       if (searchText === '') {
//         setIsFocused(false);
//       }
//     };
  
//     const handleClear = () => {
//       setSearchText('');
//       setIsFocused(false);
//     };
    

//   const handleStatusUpdate = async (projectId, newStatus) => {
//     try {
//       // Trigger the mutation to update status
//       await updateStatus({ id: projectId, updatedProjectDetails: { status: newStatus } });
//       // Refetch data after updating status
//       refetch();
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };
  
//     //calulation for pagination//
//     const rowsPerPage = 10;
//     const startIndex = (page - 1) * rowsPerPage;
//     const endIndex = startIndex + rowsPerPage;
    
//   return (
//      <Box display="flex" height="100vh">
//       <SideBar />
//       <Box
//         sx={{
//           width: "93%",
//           ml: "10px",
//           top: "20%",
//           left: "5%",
//           position: "absolute",
//           zIndex: 1,
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//       >
//         <Paper
//         sx={{maxHeight:"500px"}}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-between",
//               padding: '10px',
//               alignItems: 'center'
//             }}
//           >
//             <TextField
//               variant="standard"
//               size="small"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               placeholder="Search"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     {/* {isFocused &&  <SearchIcon />} */}
//                   </InputAdornment>
//                 ),
//                 endAdornment: isFocused && (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleClear} size="5px">
//                       <CloseIcon />
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//               style={{ width: '200px' }}
//             />
//             <Box display="flex" alignItems="center">
//               <InputLabel style={{ marginRight: '10px', fontSize: "13px" }}>Sort By:</InputLabel>
//               <FormControl style={{ minWidth: 100 }}>
//                 <Select
//                   displayEmpty
//                   variant="standard"
//                   value={priorityFilter}
//                   onChange={handlePriorityChange}
//                   style={{ borderBottom: 'none' }}
//                   MenuProps={{
//                     getContentAnchorEl: null,
//                     anchorOrigin: {
//                       vertical: 'bottom',
//                       horizontal: 'left',
//                     },
//                   }}
//                 >
//                   <MenuItem disabled value="">
//                     Priority
//                   </MenuItem>
//                   {priorities.map((option) => (
//                     <MenuItem key={option} value={option}>
//                       {option}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Box>
//           </Box>

//           <TableContainer sx={{maxHeight:"310px", overflowY: 'auto',
//             '&::-webkit-scrollbar': {
//         width: '2px' , 
//         background: 'transparent',
//       },
      
//            }}>
//             <Table stickyHeader>
//             <TableHead >
//                 <TableRow>
//                   <TableCell sx={{ bgcolor: "#ebf5ff" }}>Project Name</TableCell>
//                   <TableCell sx={{ bgcolor: "#ebf5ff" }}>Reason</TableCell>
//                   <TableCell sx={{ bgcolor: '#ebf5ff' }}>Type</TableCell>
//                   <TableCell sx={{ bgcolor: '#ebf5ff' }}>Division</TableCell>
//                   <TableCell sx={{ bgcolor: '#ebf5ff' }}>Category</TableCell>
//                   <TableCell sx={{ bgcolor: '#ebf5ff' }}>Priority</TableCell>
//                   <TableCell sx={{ bgcolor: '#ebf5ff' }}>Dept.</TableCell>
//                   <TableCell sx={{ bgcolor: '#ebf5ff' }}>Location</TableCell>
//                   <TableCell sx={{ bgcolor: '#ebf5ff' }}>Status</TableCell>
//                   <TableCell sx={{ bgcolor: '#ebf5ff' }}>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredProjects.slice(startIndex, endIndex).map((project, index) => (
//                   <TableRow key={index}>
//                     <TableCell style={{ verticalAlign: 'top', fontWeight: "bold" }}>
//                       {project.project_theme}
//                       <Typography style={{ fontSize: "10px", verticalAlign: 'bottom' }}>
//                         {formatDate(project.start_date)} to {formatDate(project.end_date)}
//                       </Typography>
//                     </TableCell>
//                     <TableCell sx={{ verticalAlign: 'top' }}>{project.reason}</TableCell>
//                     <TableCell sx={{ verticalAlign: 'top' }}>{project.type}</TableCell>
//                     <TableCell sx={{ verticalAlign: 'top' }}>{project.division}</TableCell>
//                     <TableCell sx={{ verticalAlign: 'top' }}>{project.category}</TableCell>
//                     <TableCell sx={{ verticalAlign: 'top' }}>{project.priority}</TableCell>
//                     <TableCell sx={{ verticalAlign: 'top' }}>{project.department}</TableCell>
//                     <TableCell sx={{ verticalAlign: 'top' }}>{project.location}</TableCell>
//                     <TableCell sx={{ verticalAlign: 'top' }}>
//                       <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
//                         {project.status}
//                       </Typography>
//                     </TableCell>
//                     <TableCell sx={{ verticalAlign: 'top' }}>
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         style={{ borderRadius: '30px', fontSize: '9px', marginBottom: '5px' }}
//                         onClick={() => handleStatusUpdate(project.id, 'Running')}
//                       >
//                         Start
//                       </Button>
//                       <Button
//                         variant="outlined"
//                         color="primary"
//                         style={{ borderRadius: '30px', fontSize: '9px', marginBottom: '5px', marginLeft: '5px' }}
//                         onClick={() => handleStatusUpdate(project.id, 'Closed')}
//                       >
//                         Close
//                       </Button>
//                       <Button
//                         variant="outlined"
//                         color="primary"
//                         style={{ borderRadius: '30px', fontSize: '9px', marginBottom: '5px', marginLeft: '5px' }}
//                         onClick={() => handleStatusUpdate(project.id, 'Cancelled')}
//                       >
//                         Cancel
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <Pagination
//             count={Math.ceil(projects.length / rowsPerPage)}
//             page={page}
//             onChange={handlePageChange}
//             sx={{ margin: '20px', display: 'flex', justifyContent: 'center' }}
//           />
//         </Paper>
//       </Box>
//     </Box>
//   );
// };

// export default ProjectList;



import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Pagination,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box, InputAdornment, IconButton
} from '@mui/material';
import SideBar from './SideBar';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useGetProjectQuery,useUpdateStatusMutation } from '../../Store/Slice/apiProjectSlice';
import { useTheme } from '@mui/material/styles';


const ProjectList = () => {

  const theme = useTheme()
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${month} - ${day}, ${year}`;
  };

  

    // const { data: projects = [], error, isLoading } = useGetProjectQuery();
  const [updateStatus] = useUpdateStatusMutation();
  const { data: projects = [], error, isLoading, isSuccess, refetch } = useGetProjectQuery();


  const [searchText, setSearchText] = useState("");
  const [priorityFilter, setPriorityFilter] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [page, setPage] = useState(1); 
  const [filteredProjects, setFilteredProjects] = useState([]);


  useEffect(() => {
    let filtered = projects;

    // Apply search filter
    if (searchText) {
      filtered = filtered.filter((project) =>
        Object.values(project).some(value =>
          String(value).toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }

    // Apply priority filter
    if (priorityFilter) {
      filtered = filtered.filter(project => project.priority === priorityFilter);
    }

    setFilteredProjects(filtered);
  }, [searchText, priorityFilter, projects]);

  const handlePriorityChange = (event) => {
    setPriorityFilter(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (searchText === '') {
      setIsFocused(false);
    }
  };

  const handleClear = () => {
    setSearchText('');
    setIsFocused(false);
  };

  const handleStatusUpdate = async (projectId, newStatus) => {
    try {
      await updateStatus({ id: projectId, updatedProjectDetails: { status: newStatus } });
      refetch();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Calculation for pagination
  const rowsPerPage = 10;
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <Box display="flex" height="100vh">
      <SideBar />
      <Box
        sx={{
          width: "93%",
          ml: "10px",
          top: "20%",
          left: "5%",
          position: "absolute",
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Paper sx={{ maxHeight: "500px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: '10px',
              alignItems: 'center'
            }}
          >
            <TextField
              variant="standard"
              size="small"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Search"
              InputProps={{
                startAdornment: !isFocused && (
                  <InputAdornment position="start" >
                    <SearchIcon />
                  </InputAdornment>
            
                ),
                endAdornment: searchText && (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClear} size="5px">
                      <CloseIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              style={{ width: '200px' }}
            />
            <Box display="flex" alignItems="center">
              <InputLabel style={{ marginRight: '10px', fontSize: "13px" }}>Sort By:</InputLabel>
              <FormControl style={{ minWidth: 100 }}>
                <Select
                  displayEmpty
                  variant="standard"
                  value={priorityFilter}
                  onChange={handlePriorityChange}
                  style={{ borderBottom: 'none' }}
                  MenuProps={{
                    getContentAnchorEl: null,
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                    },
                  }}
                >
                  <MenuItem value="">
                    Priority
                  </MenuItem>
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <TableContainer sx={{maxHeight:"310px", overflowY: 'auto',
            '&::-webkit-scrollbar': {
        width: '2px' , 
        background: 'transparent',
      },
      
           }}>
            <Table stickyHeader>
            <TableHead >
                <TableRow>
                  <TableCell sx={{ bgcolor: theme.palette.table.main}}>Project Name</TableCell>
                  <TableCell sx={{ bgcolor: theme.palette.table.main }}>Reason</TableCell>
                  <TableCell sx={{ bgcolor: theme.palette.table.main }}>Type</TableCell>
                  <TableCell sx={{ bgcolor: theme.palette.table.main }}>Division</TableCell>
                  <TableCell sx={{ bgcolor: theme.palette.table.main }}>Category</TableCell>
                  <TableCell sx={{ bgcolor: theme.palette.table.main }}>Priority</TableCell>
                  <TableCell sx={{ bgcolor: theme.palette.table.main }}>Dept.</TableCell>
                  <TableCell sx={{ bgcolor: theme.palette.table.main }}>Location</TableCell>
                  <TableCell sx={{ bgcolor: theme.palette.table.main }}>Status</TableCell>
                  <TableCell sx={{ bgcolor: theme.palette.table.main }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProjects.slice(startIndex, endIndex).map((project, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ verticalAlign: 'top', fontWeight: "bold" }}>
                      {project.project_theme}
                      <Typography style={{ fontSize: "10px", verticalAlign: 'bottom' }}>
                        {formatDate(project.start_date)} to {formatDate(project.end_date)}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>{project.reason}</TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>{project.type}</TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>{project.division}</TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>{project.category}</TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>{project.priority}</TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>{project.department}</TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>{project.location}</TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {project.status}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ borderRadius: '30px', fontSize: '9px', marginBottom: '5px', fontWeight:"bold" }}
                        onClick={() => handleStatusUpdate(project.id, 'Running')}
                      >
                        Start
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        style={{ borderRadius: '30px', fontSize: '9px', marginBottom: '5px', marginLeft: '5px', fontWeight:"bold" }}
                        onClick={() => handleStatusUpdate(project.id, 'Closed')}
                      >
                        Close
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        style={{ borderRadius: '30px', fontSize: '9px', marginBottom: '5px', marginLeft: '5px',fontWeight:"bold" }}
                        onClick={() => handleStatusUpdate(project.id, 'Cancelled')}
                      >
                        Cancel
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            count={Math.ceil(projects.length / rowsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="pagination"
            showFirstButton
            showLastButton
            components={{
              first: (props) => <IconButton {...props}>{'<<'}</IconButton>,
              last: (props) => <IconButton {...props}>{'>>'}</IconButton>,
            }}
            sx={{ margin: '20px', display: 'flex', justifyContent: 'center' }}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default ProjectList;
