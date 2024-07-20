// import React from 'react';
// import { Container, TextField, MenuItem, AppBar, Toolbar, IconButton, Typography, Box, Grid, Button, Paper } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import SaveIcon from '@mui/icons-material/Save';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const CreateProjectPage = () => {
//   const reasons = ['For Business', 'For Personal'];
//   const types = ['Internal', 'External'];
//   const divisions = ['Filters', 'Division 2'];
//   const categories = ['Quality A', 'Quality B'];
//   const priorities = ['High', 'Medium', 'Low'];
//   const departments = ['Department 1', 'Department 2'];

//   const initialValues = {
//     projectTheme: '',
//     reason: '',
//     type: '',
//     division: '',
//     category: '',
//     priority: '',
//     department: '',
//     startDate: '',
//     endDate: '',
//     location: '',
//   };

//   const validationSchema = Yup.object().shape({
//     projectTheme: Yup.string().required('Project Theme is required'),
//     reason: Yup.string().required('Reason is required'),
//     type: Yup.string().required('Type is required'),
//     division: Yup.string().required('Division is required'),
//     category: Yup.string().required('Category is required'),
//     priority: Yup.string().required('Priority is required'),
//     department: Yup.string().required('Department is required'),
//     startDate: Yup.date().required('Start Date is required'),
//     endDate: Yup.date().required('End Date is required'),
//     location: Yup.string().required('Location is required'),
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     // Handle form submission logic here
//     console.log(values);
//     resetForm();
//   };

//   return (
//     <Container maxWidth="md" sx={{ paddingBottom: '56px' }}>
//       <AppBar position="fixed">
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="back">
//             <ArrowBackIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Create Project
//           </Typography>
//           <IconButton color="inherit" aria-label="save">
//             <SaveIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Paper sx={{ marginTop: 10 }}>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ values, handleChange }) => (
//             <Form>
//               <Grid container spacing={2} >
//                 <Grid item xs={12}>
//                   <TextField
//                     sx={{height:"100%"}}
//                     fullWidth
//                     label="Enter Project Theme"
//                     variant="outlined"
//                     margin="normal"
//                     name="projectTheme"
//                     value={values.projectTheme}
//                     onChange={handleChange}

//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     select
//                     label="Reason"
//                     variant="outlined"
//                     margin="normal"
//                     name="reason"
//                     value={values.reason}
//                     onChange={handleChange}
//                   >
//                     {reasons.map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     select
//                     label="Type"
//                     variant="outlined"
//                     margin="normal"
//                     name="type"
//                     value={values.type}
//                     onChange={handleChange}
//                   >
//                     {types.map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     select
//                     label="Division"
//                     variant="outlined"
//                     margin="normal"
//                     name="division"
//                     value={values.division}
//                     onChange={handleChange}
//                   >
//                     {divisions.map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     select
//                     label="Category"
//                     variant="outlined"
//                     margin="normal"
//                     name="category"
//                     value={values.category}
//                     onChange={handleChange}
//                   >
//                     {categories.map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     select
//                     label="Priority"
//                     variant="outlined"
//                     margin="normal"
//                     name="priority"
//                     value={values.priority}
//                     onChange={handleChange}
//                   >
//                     {priorities.map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     select
//                     label="Department"
//                     variant="outlined"
//                     margin="normal"
//                     name="department"
//                     value={values.department}
//                     onChange={handleChange}
//                   >
//                     {departments.map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     label="Start Date"
//                     variant="outlined"
//                     margin="normal"
//                     type="date"
//                     name="startDate"
//                     value={values.startDate}
//                     onChange={handleChange}
//                     InputLabelProps={{
//                       shrink: true,
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     label="End Date"
//                     variant="outlined"
//                     margin="normal"
//                     type="date"
//                     name="endDate"
//                     value={values.endDate}
//                     onChange={handleChange}
//                     InputLabelProps={{
//                       shrink: true,
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     label="Location"
//                     variant="outlined"
//                     margin="normal"
//                     name="location"
//                     value={values.location}
//                     onChange={handleChange}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   {/* Adjust the typography for "Status: Registered" */}
//                   <Typography variant="body1">
//                     Status: <strong>Registered</strong>
//                   </Typography>
//                 </Grid>
//               </Grid>
//               <Box mt={2} display="flex" justifyContent="center" >
//                 <Button type="submit" variant="contained" color="primary" sx={{ borderRadius:"20px",width:"80%"}}>
//                   Save Project
//                 </Button>
//               </Box>
//             </Form>
//           )}
//         </Formik>
//       </Paper>
//     </Container>
//   );
// };

// export default CreateProjectPage;


import React from 'react';
import { Container, Button, Typography, Paper, Grid,Box } from '@mui/material';
import { Formik, Form, Field, ErrorMessage,useFormikContext } from 'formik';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";
import MobileHedear from './MobileHedear';
import MobileBottom from './MobileBottom';
import { useAddProjectMutation } from '../Store/Slice/apiProjectSlice';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from 'rsuite';
import 'rsuite/DatePicker/styles/index.css';


const DatePickerField = ({ name }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <DatePicker
      oneTap
      style={{ width: 600 }}
      placeholder="D Month, Yr "
      onChange={(value) => setFieldValue(name, value)}
    />
  );
};


const CreateProjectPage = () => {

  const [addProject, { loading, error }] = useAddProjectMutation();
  const history = useNavigate();

  const reasons = ['For Business', 'For Personal'];
  const types = ['Internal', 'External'];
  const divisions = ['Filters', 'Division 2'];
  const categories = ['Quality A', 'Quality B'];
  const priorities = ['High', 'Medium', 'Low'];
  const departments = ['Department 1', 'Department 2'];
  

  const initialValues = {
    projectTheme: '',
    reason: '',
    type: '',
    division: '',
    category: '',
    priority: '',
    department: '',
    startDate: '',
    endDate: '',
    location: '',
  };

  const validationSchema = Yup.object().shape({
    projectTheme: Yup.string().required('Project Theme is required'),
    reason: Yup.string().required('Reason is required'),
    type: Yup.string().required('Type is required'),
    division: Yup.string().required('Division is required'),
    category: Yup.string().required('Category is required'),
    priority: Yup.string().required('Priority is required'),
    department: Yup.string().required('Department is required'),
    startDate: Yup.date().required('Start Date is required'),
    endDate: Yup.date().required('End Date is required'),
    location: Yup.string().required('Location is required'),
  });

  const handleSubmit = async (values) => {
   try{
    await addProject({
      project_theme:values.projectTheme,
      reason:values.reason,
      type:values.type,
      division:values.division,
      category:values.category,
      priority:values.priority,
      department:values.department,
      start_date:values.startDate,
      end_date:values.endDate,
      location:values.location,
    });
    console.log("Project added successfully!");
    history("/Dashboard/projectList");
   } catch(err){
    console.error("Error adding project:", err);
   }

    
    
  };

  return (
    
<>
<MobileHedear />
  <div>
    
    <Container maxWidth="md" 
    sx={{ paddingBottom: '56px' }}>
      <Paper
        sx={{
          marginTop:10,
          marginBottom: 5,
          padding: '20px',
          opacity: '0.9',
          borderRadius: '15px',
          bgcolor: '#FFFFFF',
        }}
        elevation={10}
      >
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <div className="form-group">
                  <label htmlFor="projectTheme"></label>
                  <Field
                    type="text"
                    name="projectTheme"
                    className="form-control"
                    id="projectTheme"
                    placeholder="Enter project theme"
                    style={{ height: '10vh', marginBottom: '10px', fontSize: '22px' }}
                  />
                  <ErrorMessage name="projectTheme" component="div" className="text-danger" />
                  {/* <style>
      {`
        #projectTheme::placeholder {
          position: absolute;
          top: 0.5;
          left: 8px;
          color: #aaa;
          font-size: 22px;
          // pointer-events: none;
        }
      `}
    </style> */}

                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="form-group">
                  <label htmlFor="reason" style={{ fontSize: '20px' }}>Reason</label>
                  <Field
                    as="select"
                    name="reason"
                    className="form-select"
                    id="reason"
                    style={{ height: '7vh', marginBottom: '10px', fontSize: '22px' }}
                  >
                    <option value="" label="Select reason" />
                    {reasons.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="reason" component="div" className="text-danger" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="form-group">
                  <label htmlFor="type" style={{ fontSize: '20px' }}>Type</label>
                  <Field
                    as="select"
                    name="type"
                    className="form-select"
                    id="type"
                    style={{ height: '7vh', marginBottom: '10px', fontSize: '22px' }}
                  >
                    <option value="" label="Select type" />
                    {types.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="type" component="div" className="text-danger" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="form-group">
                  <label htmlFor="division" style={{ fontSize: '20px' }}>Division</label>
                  <Field
                    as="select"
                    name="division"
                    className="form-select"
                    id="division"
                    style={{ height: '7vh', marginBottom: '10px', fontSize: '22px'  }}
                  >
                    <option value="" label="Select division" />
                    {divisions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="division" component="div" className="text-danger" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="form-group">
                  <label htmlFor="category" style={{ fontSize: '20px' }}>Category</label>
                  <Field
                    as="select"
                    name="category"
                    className="form-select"
                    id="category"
                    style={{ height: '7vh', marginBottom: '10px', fontSize: '22px' }}
                  >
                    <option value="" label="Select category"  style={{width:"50%"}}/>
                    {categories.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="category" component="div" className="text-danger" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="form-group">
                  <label htmlFor="priority" style={{ fontSize: '20px' }}>Priority</label>
                  <Field
                    as="select"
                    name="priority"
                    className="form-select"
                    id="priority"
                    style={{ height: '7vh', marginBottom: '10px', fontSize: '22px' }}
                  >
                    <option value="" label="Select priority" />
                    {priorities.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="priority" component="div" className="text-danger" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="form-group">
                  <label htmlFor="department" style={{ fontSize: '20px' }}>Department</label>
                  <Field
                    as="select"
                    name="department"
                    className="form-select"
                    id="department"
                    style={{ height: '7vh', marginBottom: '10px', fontSize: '22px' }}
                  >
                    <option value="" label="Select department" />
                    {departments.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="department" component="div" className="text-danger" />
                </div>
              </Grid>
              <Grid item xs={12}>
              <div className="form-group">
                    <label htmlFor="startDate">Start Date as per Project Plan</label>
                    <DatePickerField name="startDate" />
                    <ErrorMessage
                      name="startDate"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                {/* <div className="form-group">
                  <label htmlFor="startDate" style={{ fontSize: '20px' }}>Start Date as per Project Plan</label>
                  <Field
                    type="date"
                    name="startDate"
                    className="form-control"
                    id="startDate"
                    style={{ height: '7vh', marginBottom: '10px', fontSize: '22px' }}
                  />
                  <ErrorMessage name="startDate" component="div" className="text-danger" />
                </div> */}
              </Grid>
              <Grid item xs={12}>
              <div className="form-group">
                    <label htmlFor="endDate">End Date as per Project Plan</label>
                    <DatePickerField name="endDate" />
                    <ErrorMessage
                      name="endDate"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                {/* <div className="form-group">
                  <label htmlFor="endDate" style={{ fontSize: '20px' }}>End Date as per Project Plan</label>
                  <Field
                    type="date"
                    name="endDate"
                    className="form-control"
                    id="endDate"
                    style={{ height: '7vh', marginBottom: '10px', fontSize: '22px' }}
                  />
                  <ErrorMessage name="endDate" component="div" className="text-danger" />
                </div> */}
              </Grid>
              <Grid item xs={12}>
                <div className="form-group">
                  <label htmlFor="location" style={{ fontSize: '20px' }}>Location</label>
                  <Field
                    type="text"
                    name="location"
                    className="form-control"
                    id="location"
                    placeholder="Enter location"
                    style={{ height: '7vh', marginBottom: '12px', fontSize: '22px' }}
                  />
                  <ErrorMessage name="location" component="div" className="text-danger" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{fontSize:"20px"}}>
                  Status: <strong>Registered</strong>
                </Typography>
              </Grid>
            </Grid>
            <Box mt={2} display="flex" justifyContent="center">
              <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: '40px', width: '100%',height:"40px",fontSize:"15px" }}>
                Save Project
              </Button>
            </Box>
          </Form>
        </Formik>
      </Paper>
    </Container>
  </div>
  <MobileBottom />
</>

  );
};

export default CreateProjectPage;




// import React from 'react';
// import { Container, Button, AppBar, Toolbar, IconButton, Typography, Paper, Grid, MenuItem,Box } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import SaveIcon from '@mui/icons-material/Save';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { TextField } from 'formik-material-ui';
// import "bootstrap/dist/css/bootstrap.min.css";
// import headerImage from "../Components/Dashboard/Images/Header-bg.svg"
// import MobileHedear from './MobileHedear';
// import MobileBottom from './MobileBottom';
// import { useAddProjectMutation } from '../Store/Slice/apiProjectSlice';
// import { useNavigate } from 'react-router-dom';

// const CreateProjectPage = () => {

//   const [addProject, { loading, error }] = useAddProjectMutation();
//   const history = useNavigate();

//   const reasons = ['For Business', 'For Personal'];
//   const types = ['Internal', 'External'];
//   const divisions = ['Filters', 'Division 2'];
//   const categories = ['Quality A', 'Quality B'];
//   const priorities = ['High', 'Medium', 'Low'];
//   const departments = ['Department 1', 'Department 2'];
  

//   const initialValues = {
//     projectTheme: '',
//     reason: '',
//     type: '',
//     division: '',
//     category: '',
//     priority: '',
//     department: '',
//     startDate: '',
//     endDate: '',
//     location: '',
//   };

//   const validationSchema = Yup.object().shape({
//     projectTheme: Yup.string().required('Project Theme is required'),
//     reason: Yup.string().required('Reason is required'),
//     type: Yup.string().required('Type is required'),
//     division: Yup.string().required('Division is required'),
//     category: Yup.string().required('Category is required'),
//     priority: Yup.string().required('Priority is required'),
//     department: Yup.string().required('Department is required'),
//     startDate: Yup.date().required('Start Date is required'),
//     endDate: Yup.date().required('End Date is required'),
//     location: Yup.string().required('Location is required'),
//   });

//   const handleSubmit = async (values) => {
//    try{
//     await addProject({
//       project_theme:values.projectTheme,
//       reason:values.reason,
//       type:values.type,
//       division:values.division,
//       category:values.category,
//       priority:values.priority,
//       department:values.department,
//       start_date:values.startDate,
//       end_date:values.endDate,
//       location:values.location,
//     });
//     console.log("Project added successfully!");
//     history("/Dashboard/projectList");
//    } catch(err){
//     console.error("Error adding project:", err);
//    }

    
    
//   };

//   return (
    
// <>
// <MobileHedear />
//   <div>
    
//     <Container maxWidth="md" 
//     sx={{ paddingBottom: '56px' }}>
//       <Paper
//         sx={{
//           marginTop:10,
//           marginBottom: 5,
//           padding: '20px',
//           opacity: '0.9',
//           borderRadius: '15px',
//           bgcolor: '#FFFFFF',
//         }}
//         elevation={10}
//       >
//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
//         <form>
//     <div className="container">
//       <div className="row">
//         <div className="col-12">
//           <div className="mb-3">
//             <label htmlFor="projectTheme" className="form-label">Project Theme</label>
//             <Field
//               type="text"
//               name="projectTheme"
//               className="form-control"
//               id="projectTheme"
//               placeholder="Enter project theme"
//             />
//             <ErrorMessage name="projectTheme" component="div" className="text-danger" />
//           </div>
//         </div>
//         <div className="col-12">
//           <div className="mb-3">
//             <label htmlFor="reason" className="form-label">Reason</label>
//             <Field
//               as="select"
//               name="reason"
//               className="form-select"
//               id="reason"
//               style={{ height: '7vh', marginBottom: '10px', fontSize: '22px', width: '50%' }}
//             >
//               <option value="" label="Select reason" />
//               {reasons.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </Field>
//             <ErrorMessage name="reason" component="div" className="text-danger" />
//           </div>
//         </div>
//         <div className="col-12">
//           <div className="mb-3">
//             <label htmlFor="type" className="form-label">Type</label>
//             <Field
//               as="select"
//               name="type"
//               className="form-select"
//               id="type"
//               style={{ height: '7vh', marginBottom: '10px', fontSize: '22px', width: '50%' }}
//             >
//               <option value="" label="Select type" />
//               {types.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </Field>
//             <ErrorMessage name="type" component="div" className="text-danger" />
//           </div>
//         </div>
//         <div className="col-12">
//           <div className="mb-3">
//             <label htmlFor="division" className="form-label">Division</label>
//             <Field
//               as="select"
//               name="division"
//               className="form-select"
//               id="division"
//               style={{ height: '7vh', marginBottom: '10px', fontSize: '22px', width: '50%' }}
//             >
//               <option value="" label="Select division" />
//               {divisions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </Field>
//             <ErrorMessage name="division" component="div" className="text-danger" />
//           </div>
//         </div>
//         <div className="col-12">
//           <div className="mb-3">
//             <label htmlFor="category" className="form-label">Category</label>
//             <Field
//               as="select"
//               name="category"
//               className="form-select"
//               id="category"
//               style={{ height: '7vh', marginBottom: '10px', fontSize: '22px', width: '50%' }}
//             >
//               <option value="" label="Select category" />
//               {categories.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </Field>
//             <ErrorMessage name="category" component="div" className="text-danger" />
//           </div>
//         </div>
//         <div className="col-12">
//           <div className="mb-3">
//             <label htmlFor="priority" className="form-label">Priority</label>
//             <Field
//               as="select"
//               name="priority"
//               className="form-select"
//               id="priority"
//               style={{ height: '7vh', marginBottom: '10px', fontSize: '22px', width: '50%' }}
//             >
//               <option value="" label="Select priority" />
//               {priorities.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </Field>
//             <ErrorMessage name="priority" component="div" className="text-danger" />
//           </div>
//         </div>
//         <div className="col-12">
//           <div className="mb-3">
//             <label htmlFor="department" className="form-label">Department</label>
//             <Field
//               as="select"
//               name="department"
//               className="form-select"
//               id="department"
//               style={{ height: '7vh', marginBottom: '10px', fontSize: '22px', width: '50%' }}
//             >
//               <option value="" label="Select department" />
//               {departments.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </Field>
//             <ErrorMessage name="department" component="div" className="text-danger" />
//           </div>
//         </div>
//         <div className="col-12">
//           <div className="mb-3">
//             <label htmlFor="startDate" className="form-label">Start Date as per Project Plan</label>
//             <Field
//               type="date"
//               name="startDate"
//               className="form-control"
//               id="startDate"
//               style={{ height: '7vh', marginBottom: '10px', fontSize: '22px', width: '50%' }}
//             />
//             <ErrorMessage name="startDate" component="div" className="text-danger" />
//           </div>
//         </div>
//         <div className="col-12">
//           <div className="mb-3">
//             <label htmlFor="endDate" className="form-label">End Date as per Project Plan</label>
//             <Field
//               type="date"
//               name="endDate"
//               className="form-control"
//               id="endDate"
//               style={{ height: '7vh', marginBottom: '10px', fontSize: '22px', width: '50%' }}
//             />
//             <ErrorMessage name="endDate" component="div" className="text-danger" />
//           </div>
//         </div>
//         <div className="col-12">
//           <div className="mb-3">
//             <label htmlFor="location" className="form-label">Location</label>
//             <Field
//               type="text"
//               name="location"
//               className="form-control"
//               id="location"
//               placeholder="Enter location"
//               style={{ height: '7vh', marginBottom: '10px', fontSize: '22px', width: '50%' }}
//             />
//             <ErrorMessage name="location" component="div" className="text-danger" />
//           </div>
//         </div>
//         <div className="col-12">
//           <Typography>
//             Status: <strong>Registered</strong>
//           </Typography>
//         </div>
//         <div className="col-12">
//           <button type="submit" className="btn btn-primary">Save Project</button>
//         </div>
//       </div>
//     </div>
//   </form>

//         </Formik>
//       </Paper>
//     </Container>
//   </div>
//   <MobileBottom />
// </>

//   );
// };

// export default CreateProjectPage;