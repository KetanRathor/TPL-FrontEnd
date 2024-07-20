import  { useEffect, useState } from "react";
import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  CardContent,
  Button,
  Grid,
  Container,
  Box,
  Paper,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import MobileHedear from "./MobileHedear";
import MobileBottom from "./MobileBottom";
import CloseIcon from '@mui/icons-material/Close';
import { useGetProjectQuery,useUpdateStatusMutation } from "../Store/Slice/apiProjectSlice";





const MobileProjectList = () => {

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


  const [updateStatus] = useUpdateStatusMutation();
  const { data: projects = [], error, isLoading, refetch } = useGetProjectQuery();

  const [filterText, setFilterText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('');
  const [openFilterDialog, setOpenFilterDialog] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const handleFilterDialogOpen = () => {
    setOpenFilterDialog(true);
  };

  const handleFilterDialogClose = () => {
    setSelectedPriority('');
    setOpenFilterDialog(false);
  };

  const handleClear = () => {
    setFilterText('');
    setIsFocused(false);
  };

  useEffect(() => {
    if (!filterText) {
      setIsFocused(false);
    }
  }, [filterText]);

  // useEffect(() => {
  //   const filteredData = projects.filter(project => {
  //     const matchesText = Object.values(project).some(value =>
  //       String(value).toLowerCase().includes(filterText.toLowerCase())
  //     );
  //     return matchesText;
  //   });
  //   setFilteredProjects(filteredData);
  // }, [projects, filterText]);

  useEffect(() => {
    const filteredData = projects.filter(project => {
      const matchesText = Object.values(project).some(value =>
        String(value).toLowerCase().includes(filterText.toLowerCase())
      );
      const matchesPriority = selectedPriority ? project.priority === selectedPriority : true;
      return matchesText && matchesPriority;
    });
    setFilteredProjects(filteredData);
  }, [projects, filterText, selectedPriority]);

  const handleStatusUpdate = async (projectId, newStatus) => {
    try {
      // Trigger the mutation to update status
      await updateStatus({ id: projectId, updatedProjectDetails: { status: newStatus } });
      // Refetch data after updating status
      refetch();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleFilterChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  const handleApply = () => {
    setOpenFilterDialog(false);
    const filteredData = projects.filter(project => {
      const matchesText = Object.values(project).some(value =>
        String(value).toLowerCase().includes(filterText.toLowerCase())
      );
      const matchesPriority = selectedPriority ? project.priority === selectedPriority : true;
      return matchesText && matchesPriority;
    });
    setFilteredProjects(filteredData);
  };



  return (
    <>
      <Box
      sx={{
        height:"100%",
        width:"100vw",
        bgcolor:"#eeeeee",
        display:"flex",
        flexDirection:"column",
        paddingTop:"50px"
    }}
      >
         <MobileHedear
        
        /> 

<Box 
      sx={{  
    // marginTop:"50px",
    padding: "20px", display: "flex", justifyContent: "space-between" }}
    // sx={{
    //   position: "fixed",
    //   width: "100%",
    //   backgroundColor: "#eeeeee",
    //   zIndex: 1, 
    //   padding: "20px",
    //   display: "flex",
    //   justifyContent: "space-between",
    // }}

    >
<TextField
        fullWidth
        variant="standard"
        placeholder="Search"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          if (!filterText) {
            setIsFocused(false);
          }
        }}
        InputProps={{
          startAdornment: !isFocused && (
            <InputAdornment position="start">
              <IconButton >
                <SearchIcon sx={{ fontSize: 30 }} /> {/* Adjust fontSize as needed */}
              </IconButton>
            </InputAdornment>
          ),
          
          endAdornment: (
            <InputAdornment position="end">
              {filterText && (
                <IconButton onClick={handleClear} size="medium">
                  <CloseIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
          sx: {
            height: '50px',
            '& input::placeholder': {
              fontSize: '20px', // Adjust the font size as needed
            },
          },
        }}
      />
      <IconButton onClick={openFilterDialog ? handleFilterDialogClose : handleFilterDialogOpen}>
            {openFilterDialog? <CloseIcon /> : <FilterListIcon />}
          </IconButton>
    </Box>
        
        <Container
          sx={{
            marginBottom:"15%",
            // marginTop:"20%",
            opacity: "0.9",
            borderRadius: "15px",
          }}
        >
             { filteredProjects.map((project, index) => (
              <Paper
              
            //   elevation={5}
              key={index}
            //   variant="outlined"
              sx={{ marginBottom: 3, height: "35vh", display: "flex", flexDirection: "column",borderRadius:"15px"}}
              elevation={5}
            >
              <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                //   sx={{ marginBottom: 3 }}
                >
                  <Typography variant="h6" noWrap sx={{fontWeight:"bold"}}>{project.project_theme}</Typography>
                  <Typography variant="body2" sx={{fontWeight:"bold"}}>
                  <strong>{project.status}</strong>
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
                {formatDate(project.start_date)} to {formatDate(project.end_date)}
                </Typography>
                <Box
                sx={{ marginTop: 3 }}
                >
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  Reason: <strong>{project.reason}</strong>
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  Type: <strong>{project.type}</strong> &#8226; Category: <strong>{project.category}</strong>
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  Div: <strong>{project.division}</strong> &#8226; Dept: <strong>{project.department}</strong> 
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  Location: <strong>{project.location}</strong>
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  Priority: <strong>{project.priority}</strong>
                </Typography>
                </Box>
                <Grid container spacing={1} sx={{ marginTop: "auto" }}>
                  <Grid item xs={4} >
                    <Button fullWidth variant="contained" color="primary"
                    sx={{borderRadius:"40px",textTransform:"none",fontSize:"18px"}}
                    onClick={() => handleStatusUpdate(project.id, 'Running')}
                    >
                      Start
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button fullWidth variant="outlined"
                    sx={{borderRadius:"40px",textTransform:"none",fontSize:"18px"}}
                    onClick={() => handleStatusUpdate(project.id, 'Closed')}
                    >
                      Close
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button fullWidth variant="outlined"
                    sx={{borderRadius:"40px",textTransform:"none",fontSize:"18px"}}
                    onClick={() => handleStatusUpdate(project.id, 'Cancelled')}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>
            ))}
        </Container>
        <MobileBottom />  

        
      </Box>

      <Dialog open={openFilterDialog} onClose={handleFilterDialogClose}>
        <DialogTitle>Filter Projects</DialogTitle>
        <DialogContent sx={{width:"90vw"}}>
          <FormControl sx={{width:"100%"}}>
            <InputLabel  id="filter-label">Filter</InputLabel>
            <Select
              labelId="filter-label"
              value={selectedPriority}
              onChange={handleFilterChange}
              label="Filter"
              onClick={handleApply}
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFilterDialogClose} color="primary">
            Cancel
          </Button>
          {/* <Button onClick={handleApply} color="primary">
            Apply
          </Button> */}
        </DialogActions>
      </Dialog>
      
    </>
  );
};

export default MobileProjectList;
