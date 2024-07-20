import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,LabelList } from 'recharts';
import SideBar from './SideBar';
import MobileBottom from '../../MobileDashboard/MobileBottom';
import UseReponsive from '../Hooks/UseResponsive';
import MobileHeader from '../../MobileDashboard/MobileHedear';
import{ useGetStatusAndCountQuery, useDeptTotalVsClosedQuery } from '../../Store/Slice/apiProjectSlice';



const Dashboard = () => {

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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginRight: 15 ,marginTop:15 }}>
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

  const { data: statusData, error, isLoading } =useGetStatusAndCountQuery()
  const {data: barData} = useDeptTotalVsClosedQuery()
const responsive = UseReponsive();

  // const enhancedData = addPercentageData(data);
  return (
    <Box
      sx={{
        
        flexDirection: { xs: 'column', md: 'row' },
        width:"100vw",
        height: '100vh',
       
      }}
    >
      
        <Box
        sx={{maxWidth:"100%"}}
        >
{
responsive.isTablet?<MobileHeader/>
:
<SideBar/>
}
</Box>
      
      <Box
      sx={{
        width: "94%",
        height: { xs: '100%', md: '80%' },
        
        
        ml: "10px",
        top: "20%",
        left: "5%",
        position: "absolute",
        zIndex: 1,
        
        overflowY: 'hidden', 
    overflowX: 'hidden',
      }}
      
       >
        

        {/* Scrollable cards */}
        <Box sx={{ display: 'flex', overflowX: 'hidden' }}>
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'auto',
      '&::-webkit-scrollbar': {
        width: '2px' , 
        background: 'transparent',
      },
      
    }}
     >
    {statusData && Object.keys(statusData).map((key, index) => (
        <Card key={index} sx={{ minWidth: 220, marginRight: 2, display: 'flex', flexDirection: 'row', height: "15vh" }}>
          <Box sx={{ width: '7px', bgcolor: '#0CC9E8' }} />
          <Box>
            <CardContent>
              <Typography sx={{ fontSize: "14px" }}>{key}</Typography>
              <Typography variant="h5"> {statusData[key]}</Typography>
            </CardContent>
          </Box>
        </Card>
      ))}
    </Box>
  </Box>
  <Box

  sx={{
    // mt:"2px",
    width:"100%" }}
  >
        {/* Bar chart */}
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Department wise - Total Vs Closed</Typography>
              <Card>
                <CardContent>
                  <ResponsiveContainer width="100%" height={270}>
                    <BarChart data={barData} barSize={10}>
                      <XAxis dataKey="name" tick={{ fill: '#000' }} tickLine={false}/>
                      <YAxis tickLine={false}/>
                      <Tooltip />
                      <Legend content={renderCustomLegend}/>
                      <Bar dataKey="totalProjects" fill="#0259ab"shape={<CustomBar />}>
                        <LabelList dataKey="totalProjects" fontSize={10} position="top" />
                        {/* <LabelList dataKey="percentage" position="bottom" /> */}
                      </Bar>
                      <Bar dataKey="closedProjects" fill="#5aa647" shape={<CustomBar />}>
                        <LabelList dataKey="closedProjects" fontSize={10} position="top" />
                        <LabelList dataKey="percentage" fontSize={12} position="insideBottom" offset={-35} fontWeight="bold"   fill="#000" />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
{responsive.isTablet &&  <MobileBottom/>}

    </Box>
  );
};

export default Dashboard;

