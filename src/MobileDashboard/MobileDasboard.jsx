// import React from 'react';
// import { AppBar, Box, Card, CardContent, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
// import dashboard from '../Components/Dashboard/Images/Dashboard.svg';
// import dashboardClicked from '../Components/Dashboard/Images/Dashboard-active.svg';
// import projectList from '../Components/Dashboard/Images/Project-list.svg';
// import projectListClicked from '../Components/Dashboard/Images/Project-list-active.svg';
// import createProject from '../Components/Dashboard/Images/create-project.svg';
// import createProjectClicked from '../Components/Dashboard/Images/create-project-active.svg';
// import MobileBottom from './MobileBottom';
// import MobileHedear from './MobileHedear';
// import { useGetStatusAndCountQuery, useDeptTotalVsClosedQuery} from '../Store/Slice/apiProjectSlice';

// // const data = [
// //   { name: 'STR', Total: 19, Closed: 14 },
// //   { name: 'FIN', Total: 7, Closed: 6 },
// //   { name: 'QLT', Total: 9, Closed: 8 },
// //   { name: 'MAN', Total: 15, Closed: 15 },
// //   { name: 'STO', Total: 5, Closed: 5 },
// //   { name: 'HR', Total: 10, Closed: 9 },
// // ];

// // const addPercentageData = (data) => {
// //   return data.map(item => ({
// //     ...item,
// //     Percentage: ((item.Closed / item.Total) * 100).toFixed(2) + '%'
// //   }));
// // };

// const MobileDashboard = () => {
//   const {data:statusData}=useGetStatusAndCountQuery()
//   const {data:barData}=useDeptTotalVsClosedQuery()

//   // const enhancedData = addPercentageData(data);

//   return (
   

//     <>
//   <Box
//     sx={{
//       display: "flex",
//       flexDirection: { xs: "column", md: "row" },
//       width: "100vw",
//       height: "100vh",
//       bgcolor: "#eeeeee",
//     }}
//   >
//     <Box>
//       <MobileHedear />
//     </Box>

//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         // justifyContent: "space-between", // Ensures the child elements are spaced between top and bottom
//         alignItems: "center",
//         overflowY: "hidden",
//         marginTop: "15%",
//         height: "100%", // Makes the Box take full height of the container
//       }}
//     >
//       {/* Scrollable cards */}
//       <Box
//         sx={{
//           width: "100%",
//           height: "12vh",
//           display: "flex",
//           overflowX: "auto",
//           marginLeft: "10%",
//           // paddingBottom: "5%",
//           // marginTop:"15%"
//         }}
//       >
//         {statusData && Object.keys(statusData).map((key, index )=>(
//           <Card
//             key={index}
//             sx={{
//               minWidth: 180,
//               marginRight: 4,
//               display: "flex",
//               flexDirection: "row",
//               height: "100%",
//             }}
//           >
//             <Box sx={{ width: "7px", bgcolor: "#0CC9E8" }} />
//             <Box>
//               <CardContent>
//                 <Typography sx={{ fontSize: "22px" }}>{key}</Typography>
//                 <Typography sx={{ fontSize: "28px" }}>
//                   {statusData[key]}
//                 </Typography>
//               </CardContent>
//             </Box>
//           </Card>
//         ))}
//       </Box>

//       {/* Bar chart */}
      
//       <Box
//         sx={{
//           width: "90%",
//           height: "80%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//            paddingBottom:"15%",
//            marginTop:"20px"

          
//         }}
//       >
//         <Typography variant="h5"
//         sx={{paddingBottom:"5px"}}
//         >
//           Department wise - Total Vs Closed
//         </Typography>
//         <Paper
//           sx={{
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "flex-end",
            
           
            
           
//           }}
//           elevation={3}
//         >
//           <CardContent sx={{ flex: 1 }}>
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart
//                 data={statusData}
//                 // margin={{ top: 15, right: 30, left: 20, bottom: 10 }}
//                 barSize={8}
//               >
//                 <XAxis  dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="totalProjects" fill="#8884d8">
//                   <LabelList dataKey="totalProjects" fontSize={10} position="top" />
                  
//                 </Bar>
//                 <Bar dataKey="closedProjects" fill="#82ca9d">
//                 <LabelList
//         dataKey="percentage"
//         fontSize={11}
//         position="insideBottom"
//         offset={-33} // Adjust offset as needed
//       />
//                 </Bar>
                
//               </BarChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Paper>
//       </Box>
//     </Box>
//     <MobileBottom />
//   </Box>
// </>

//   );
// };

// export default MobileDashboard;

import React from 'react';
import { Box, Card, CardContent, Typography, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import MobileBottom from './MobileBottom';
import MobileHedear from './MobileHedear';
import { useGetStatusAndCountQuery, useDeptTotalVsClosedQuery } from '../Store/Slice/apiProjectSlice';
import { useTheme } from '@mui/material/styles';

const MobileDashboard = () => {

  const theme = useTheme()

  const { data: statusData } = useGetStatusAndCountQuery();
  const { data: barData } = useDeptTotalVsClosedQuery();

  const CustomBar = (props) => {
    const { fill, x, y, width, height } = props;
    const radius = 4; // Adjust the border radius as needed
    const gap = 3; // Adjust the gap from the X-axis as needed
  
    return (
      <rect
        x={x}
        y={y - gap}
        width={width}
        height={height - gap}
        fill={fill}
        rx={radius}
        ry={radius}
      />
    );
  };

 const renderCustomLegend = (props) => {
  const { payload } = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}>
            <svg width="12" height="12" style={{ marginRight: 4 }}>
              <circle cx="6" cy="6" r="6" fill={entry.color} />
            </svg>
            <span>{entry.value === 'totalProjects' ? 'Total' : 'Closed'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100vw",
          height: "100vh",
          bgcolor: "#eeeeee",
        }}
      >
        <Box>
          <MobileHedear />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflowY: "hidden",
            marginTop: "15%",
            height: "100%",
          }}
        >
          {/* Scrollable cards */}
          <Box
            sx={{
              width: "100%",
              height: "12vh",
              display: "flex",
              overflowX: "auto",
              marginLeft: "10%",
            }}
          >
            {statusData &&
              Object.keys(statusData).map((key, index) => (
                <Card
                  key={index}
                  sx={{
                    minWidth: 180,
                    marginRight: 4,
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                  }}
                >
                  <Box sx={{ width: "7px", bgcolor: theme.palette.cards.main }} />
                  <Box>
                    <CardContent>
                      <Typography sx={{ fontSize: "17px" }}>{key}</Typography>
                      <Typography sx={{ fontSize: "28px" }}>
                        {statusData[key]}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              ))}
          </Box>

          {/* Bar chart */}
          <Box
            sx={{
              width: "90%",
              height: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingBottom: "15%",
              marginTop: "20px",
              // padding: 0             
            }}
          >
            <Typography variant="h5" sx={{ paddingBottom: "5px" }}>
              Department wise - Total Vs Closed
            </Typography>
            <Paper
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginLeft: 0,
              }}
              elevation={3}
            >
              <CardContent 
              sx={{ flex: 1,marginLeft: 0  }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} barSize={10}>
                  <XAxis dataKey="name" tick={{ fill: '#000' }} tickLine={false}/>
                  <YAxis tickLine={false}/>
                    <Tooltip />
                    <Legend content={renderCustomLegend} />
                    <Bar dataKey="totalProjects" fill="#0259ab"  shape={<CustomBar />}>
                      <LabelList
                        dataKey="totalProjects"
                        fontSize={10}
                        position="top"
                      />
                    </Bar>
                    <Bar dataKey="closedProjects" fill="#5aa647"  shape={<CustomBar />}>
                    <LabelList
                        dataKey="closedProjects"
                        fontSize={10}
                        position="top"
                      />
                      <LabelList
                        dataKey="percentage"
                        fontWeight={"bold"}
                        fontSize={11}
                        position="insideBottom"
                        offset={-33}
                        fill='#000'
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Paper>
          </Box>
        </Box>
        <MobileBottom />
      </Box>
    </>
  );
};

export default MobileDashboard;

