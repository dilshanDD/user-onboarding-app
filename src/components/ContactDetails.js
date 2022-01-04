import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowLeftAltIcon from "@mui/icons-material/ArrowRightAlt";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

class ContactDetails extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    const steps = [
      {
        label: "Contact Details",
      },
      {
        label: "Investment plans",
      },
      {
        label: "Investment preferences",
      },
    ];

    return (
      <React.Fragment>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} style={{ height: "100vh" }}>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              style={{ backgroundColor: "#35a0ee" }}
            >
              <Typography variant="h5" align="left" style={{ color: "white" }}>
                Blue area
              </Typography>

              <Box sx={{ maxWidth: 400 }} pl={10} pt={20}>
                <Stepper activeStep={values.step} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel>{step.label}</StepLabel>
                      <StepContent>
                        <Typography>{step.description}</Typography>
                        <Box sx={{ mb: 2 }}>
                          <div></div>
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </Box>

              <Box
                sx={{
                  width: 300,
                  height: 200,
                  backgroundColor: "white",
                }}
                mt={10}
                ml={10}
              >
                <Typography style={{ color: "gray", fontStyle: 'italic'}} pt={5} pl={2} >
                  <p>
                    "We are about your time, that's why we created a 3-stage onboarding that will
                    not take more than 5 minues to complete"
                  </p>
                  <p>
                    William Mac 
                  </p>
                </Typography>
                <br/>
               
              </Box>
            </Grid>
            <Grid
              item
              xs={8}
              sm={8}
              md={8}
              lg={8}
              style={{ backgroundColor: "white" }}
            >
              <Box
                mt={2}
                ml={10}
                mr={10}
                sx={{ height: 50 }}
                style={{ backgroundColor: "white" }}
              >
                <div style={{ display: "flex" }}>
                  <Typography align="left" style={{ color: "grey" }}>
                    step 1 from 3
                  </Typography>
                  <Typography pl={30} style={{ color: "gray" }}>
                    Lost or have trouble?
                    <Button
                      sx={{ width: 110 }}
                      variant="text"
                      style={{ textTransform: "none", color: "#35a0ee" }}
                      endIcon={<ArrowRightAltIcon />}
                    >
                      Get help
                    </Button>
                  </Typography>
                </div>
              </Box>

              <div>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h5"
                  align="left"
                  pt={5}
                  pl={10}
                >
                  Contact Details
                </Typography>
                <Typography style={{ color: "gray" }} pl={10}>
                  <p>
                    Welcome to united United Properties. we are glad to see you!
                    Let's get
                    <div>started by letting us know a little bit about you</div>
                  </p>
                </Typography>
              </div>

              <Box
                component="form"
                mt={1}
                sx={{ "& > :not(style)": { m: 2, width: "25ch" } }}
                pl={10}
              >
                <TextField
                  id="f-name"
                  label="Full name"
                  variant="standard"
                  defaultValue={values.fullname}
                  onChange={handleChange("fullname")}
                />
                <TextField
                  id="contact-no"
                  label="Contact Number"
                  variant="standard"
                  defaultValue={values.phone}
                  onChange={handleChange("phone")}
                />
                <div>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email address"
                    variant="standard"
                    style={{ width: "53ch" }}
                    defaultValue={values.email}
                    onChange={handleChange("email")}
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    id="select-country"
                    select
                    label="Country"
                    SelectProps={{ native: true }}
                    variant="standard"
                    style={{ width: "53ch" }}
                    defaultValue={values.email}
                    onChange={handleChange("email")}
                  ></TextField>
                </div>

                <div>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="h5"
                    align="left"
                  >
                    Privacy policy
                  </Typography>
                  <p style={{ width: "70ch", color: "gray" }}>
                    We know you care about how your personal information is used
                    and
                    <div>shared, so we take your privacy seriously</div>
                  </p>
                  <Button
                    variant="text"
                    style={{ textTransform: "none", color: "#35a0ee" }}
                    endIcon={<ArrowRightAltIcon />}
                  >
                    Expand privacy policy
                  </Button>
                </div>
                <br />

                <Button
                  variant="text"
                  style={{ textTransform: "none", color: "#35a0ee" }}
                  endIcon={<ArrowLeftAltIcon />}
                >
                  Back to the home
                </Button>

                <Button
                  size="medium"
                  style={{ textTransform: "none", color: "#35a0ee" }}
                >
                  Skip for now
                </Button>
                <Button
                  style={{ backgroundColor: "#35a0ee" }}
                  variant="contained"
                  onClick={this.continue}
                >
                  Continue
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
    );
  }
}

export default ContactDetails;
