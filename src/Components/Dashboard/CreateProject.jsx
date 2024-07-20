import React from "react";
import { Formik, Form, Field, ErrorMessage,useFormikContext } from "formik";
import { Grid, Button, Paper, Box, Typography } from "@mui/material";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";
import { useAddProjectMutation } from "../../Store/Slice/apiProjectSlice";
import { DatePicker } from 'rsuite';
import 'rsuite/DatePicker/styles/index.css';
import { useNavigate } from "react-router-dom";
import '../Dashboard/datePicker.css'


  
  const reasons = ['For Business', 'For Personal'];
  const types = ['Internal', 'External'];
  const divisions = ['Filters', 'Division 2'];
  const categories = ['Quality A', 'Quality B'];
  const priorities = ['High', 'Medium', 'Low'];
  const departments = ['Department 1', 'Department 2'];


const initialValues = {
  reason: "",
  type: "",
  division: "",
  category: "",
  priority: "",
  department: "",
  startDate: null,
  endDate: null,
  location: "",
};

const validationSchema = Yup.object().shape({
  projectTheme: Yup.string().required("Project Theme is required"),
  reason: Yup.string().required("Reason is required"),
  type: Yup.string().required("Type is required"),
  division: Yup.string().required("Division is required"),
  category: Yup.string().required("Category is required"),
  priority: Yup.string().required("Priority is required"),
  department: Yup.string().required("Department is required"),
  startDate: Yup.date().required("Start Date is required"),
  endDate: Yup.date().required("End Date is required"),
  location: Yup.string().required("Location is required"),
});

const DatePickerField = ({ name }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <DatePicker
      oneTap
      style={{ width: 400 }}
      placeholder="D Month, Yr "
      onChange={(value) => setFieldValue(name, value)}
    />
  );
};

const ProjectForm = () => {

  // const { setFieldValue } = useFormikContext();
  const [addProject, { loading, error }] = useAddProjectMutation();
  const history = useNavigate()

  const handleSubmit = async (values) => {
    try {
      
      await addProject({
        project_theme: values.projectTheme,
        reason: values.reason,
        type: values.type,
        division: values.division,
        category: values.category,
        priority: values.priority,
        department: values.department,
        start_date: values.startDate,
        end_date: values.endDate,
        location: values.location,
      })
     
      console.log("Project added successfully!");
      history("/Dashboard/projectList");
      
    } catch (err) {
      console.error("Error adding project:", err);
      
    }
  };
  return (
    <Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <SideBar />
      </Box>
      <Paper
        sx={{
          width: "91%",
          height: { xs: "100%", md: "78%" },
          ml: "10px",
          top: "20%",
          position: "absolute",
          left: "5%",
          zIndex: 1,
          elevation: 1,
        }}
        elevation={1}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <Grid
                sx={{ ml: "20px", alignItems: "center" }}
                container
                spacing={2}
                direction={"row"}
              >
                <Grid item xs={12} md={6}>
                  {/* <div className="form-group"> */}
                    <label htmlFor="projectTheme"></label>
                    <Field
                      type="text"
                      name="projectTheme"
                      className="form-control"
                      id="projectTheme"
                      placeholder="Enter project theme"
                      style={{ height: "12vh", marginBottom: "20px" }}
                    />
                    <ErrorMessage
                      name="projectTheme"
                      component="div"
                      className="text-danger"
                    />
                  {/* </div> */}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button
                    sx={{
                      borderRadius: "15px",
                      textTransform: "none",
                      width: "12vw",
                      marginRight: "50px",
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Save Project
                  </Button>
                </Grid>
              </Grid>

              <Grid sx={{ ml: "20px" }} container spacing={2}>
                <Grid item xs={12} md={3.5}>
                  {/* <div className="form-group"> */}
                    <label htmlFor="reason">Reason</label>
                    <Field
                      type="text"
                      name="reason"
                      className="form-control"
                      id="reason"
                      placeholder="Enter reason"
                      style={{ height: "8vh", marginBottom: "20px" }}
                    />
                    <ErrorMessage
                      name="reason"
                      component="div"
                      className="text-danger"
                    />
                  {/* </div> */}
                </Grid>
                <Grid item xs={12} md={3.5}>
                  {/* <div className="form-group"> */}
                    <label htmlFor="type">Type</label>
                    <Field
                      as="select"
                      name="type"
                      className="form-select"
                      id="type"
                      style={{ height: "8vh", marginBottom: "20px" }}
                    >
                      <option value="" disabled>
                        Select Type
                      </option>
                      {types.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                      {/* Add more options as needed */}
                    </Field>
                    <ErrorMessage
                      name="type"
                      component="div"
                      className="text-danger"
                    />
                  {/* </div> */}
                </Grid>
                <Grid item xs={12} md={3.5}>
                  {/* <div className="form-group"> */}
                    <label htmlFor="division">Division</label>
                    <Field
                      as="select"
                      name="division"
                      className="form-select"
                      id="division"
                      style={{ height: "8vh", marginBottom: "20px" }}
                    >
                      <option value="" disabled>
                        Select Division
                      </option>
                      {divisions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="division"
                      component="div"
                      className="text-danger"
                    />
                  {/* </div> */}
                </Grid>
              </Grid>

              <Grid sx={{ ml: "20px" }} container spacing={2}>
                <Grid item xs={12} md={3.5}>
                  {/* <div className="form-group"> */}
                    <label htmlFor="category">Category</label>
                    <Field
                      as="select"
                      name="category"
                      className="form-select"
                      id="category"
                      style={{ height: "8vh", marginBottom: "20px" }}
                    >
                      <option value="" disabled>
                        Select Category
                      </option>
                      {categories.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="category"
                      component="div"
                      className="text-danger"
                    />
                  {/* </div> */}
                </Grid>
                <Grid item xs={12} md={3.5}>
                  {/* <div className="form-group"> */}
                    <label htmlFor="priority">Priority</label>
                    <Field
                      as="select"
                      name="priority"
                      className="form-select"
                      id="priority"
                      style={{ height: "8vh", marginBottom: "20px" }}
                    >
                      <option value="" disabled>
                        Select Priority
                      </option>
                      {priorities.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="priority"
                      component="div"
                      className="text-danger"
                    />
                  {/* </div> */}
                </Grid>
                <Grid item xs={12} md={3.5}>
                  {/* <div className="form-group"> */}
                    <label htmlFor="department">Department</label>
                    <Field
                      as="select"
                      name="department"
                      className="form-select"
                      id="department"
                      placeholder="Seleteeee"
                      style={{
                        height: "8vh",
                        marginBottom: "20px",
                      }}
                    >
                      <option value="" disabled>
                        Select Department
                      </option>
                      {departments.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="department"
                      component="div"
                      className="text-danger"
                    />
                  {/* </div> */}
                </Grid>
              </Grid>

              <Grid sx={{ ml: "20px" }} container spacing={2}>
                 {/* <Grid item xs={12} md={3.5}>
                  <div className="form-group">
                    <label htmlFor="startDate">Start Date as per Project Plan</label> */}
                    {/* <Field
                      type="date"
                      name="startDate"
                      className="form-control"
                      id="startDate"
                      style={{ height: "8vh", marginBottom: "20px"}}
                    /> */}
                    {/* <DatePicker oneTap style={{width:400}}  placeholder="D Month, Yr " />
                    <ErrorMessage
                      name="startDate"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Grid>  */}

<Grid item xs={12} md={3.5}>
                  {/* <div className="form-group"> */}
                    <label htmlFor="startDate" >Start Date as per Project Plan</label>
                    <DatePickerField name="startDate" />
                    <ErrorMessage
                      name="startDate"
                      component="div"
                      className="text-danger"
                    />
                  {/* </div> */}
                </Grid>
                {/* <Grid item xs={12} md={3.5}>
                  <div className="form-group">
                    <label htmlFor="endDate">End Date as per Project Plan</label>
                    <Field
                      type="date"
                      name="endDate"
                      className="form-control"
                      id="endDate"
                      style={{ height: "8vh", marginBottom: "20px" }}
                    />
                    <ErrorMessage
                      name="endDate"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Grid> */}

            <Grid item xs={12} md={3.5}>
                  {/* <div className="form-group"> */}
                    <label htmlFor="endDate">End Date as per Project Plan</label>
                    <DatePickerField name="endDate" />
                    <ErrorMessage
                      name="endDate"
                      component="div"
                      className="text-danger"
                    />
                  {/* </div> */}
                </Grid>
                
                <Grid item xs={12} md={3.5}>
                  {/* <div className="form-group"> */}
                    <label htmlFor="location">Location</label>
                    <Field
                      as="select"
                      name="location"
                      className="form-select"
                      id="location"
                      style={{ height: "8vh", marginBottom: "20px" }}
                    >
                      <option value="">Select location</option>
                      <option value="Location1">Location1</option>
                      <option value="Location2">Location2</option>
                    </Field>
                    <ErrorMessage
                      name="location"
                      component="div"
                      className="text-danger"
                    />
                  {/* </div> */}
                  <Typography variant="body2">
                    Status:<strong>Registered</strong>
                  </Typography>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default ProjectForm;




