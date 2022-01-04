import React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Checkbox from "@mui/material/Checkbox";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

class InvestmentPref extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
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
                {/* Blue area */}
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
                <Typography
                  style={{ color: "gray", fontStyle: "italic" }}
                  pt={5}
                  pl={2}
                >
                  <p>
                    United Properties is about fast and easy searching,
                    buying,selling and investing ever - online, with an expert
                    by our side.
                  </p>
                  <p>Ollie Mcmahon</p>
                </Typography>
                <br />
              </Box>
            </Grid>
            <Grid
              item
              xs={8}
              sm={8}
              md={8}
              // lg={8}
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
                    step 3 from 3
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
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h5"
                align="left"
                pt={5}
                pl={10}
              >
                Investment Preferences
              </Typography>
              <Typography style={{ color: "gray" }} pl={10}>
                <p>
                  This will help us figue out what your investment options are
                  so
                  <div>
                    that we can show you only possibly interesting for you
                    details.
                  </div>
                </p>
              </Typography>
              {/* Box Set 
              
              
              */}
              <div>
                <Box
                  component="form"
                  mt={1}
                  sx={{
                    "& > :not(style)": { m: 1, width: "12ch", height: "15ch" },
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                  noValidate
                  autoComplete="off"
                  pl={10}
                >
                  <Box
                    mt={2}
                    ml={10}
                    mr={10}
                    sx={{ border: 2, borderColor: "#35A0EE", borderRadius: 2 }}
                  >
                    <Checkbox {...label} />
                    <Typography pl={2} pt={3} style={{ color: "black" }}>
                      Single family
                    </Typography>
                  </Box>

                  <Box
                    mt={2}
                    ml={10}
                    mr={10}
                    sx={{ border: 2, borderColor: "#35A0EE", borderRadius: 2 }}
                  >
                    <Checkbox {...label} />
                    <Typography pl={1} pt={3} style={{ color: "black" }}>
                      Residential multifamily
                    </Typography>
                  </Box>

                  <Box
                    mt={2}
                    ml={10}
                    mr={10}
                    sx={{ border: 2, borderColor: "#35A0EE", borderRadius: 2 }}
                  >
                    <Checkbox {...label} />
                    <Typography pl={1} pt={3} style={{ color: "black" }}>
                      Commercial retail
                    </Typography>
                  </Box>

                  <Box
                    mt={2}
                    ml={10}
                    mr={10}
                    sx={{ border: 2, borderColor: "#35A0EE", borderRadius: 2 }}
                  >
                    <Checkbox {...label} />
                    <Typography pl={1} pt={3} style={{ color: "black" }}>
                      Commercial industrial
                    </Typography>
                  </Box>
                </Box>
                <Box
                  component="form"
                  mt={1}
                  sx={{
                    "& > :not(style)": { m: 1, width: "12ch", height: "15ch" },
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                  noValidate
                  autoComplete="off"
                  pl={10}
                >
                  <Box
                    mt={2}
                    ml={10}
                    mr={10}
                    sx={{ border: 2, borderColor: "#35A0EE", borderRadius: 2 }}
                  >
                    <Checkbox {...label} />
                    <Typography pl={1} pt={3} style={{ color: "black" }}>
                      Commercial hospitality
                    </Typography>
                  </Box>

                  <Box
                    mt={2}
                    ml={10}
                    mr={10}
                    sx={{ border: 2, borderColor: "#35A0EE", borderRadius: 2 }}
                  >
                    <Checkbox {...label} />
                    <Typography pl={1} pt={3} style={{ color: "black" }}>
                      Commercial webhousing
                    </Typography>
                  </Box>

                  <Box
                    mt={2}
                    ml={10}
                    mr={10}
                    sx={{ border: 2, borderColor: "#35A0EE", borderRadius: 2 }}
                  >
                    <Checkbox {...label} />
                    <Typography pl={1} pt={3} style={{ color: "black" }}>
                      Commercial office
                    </Typography>
                  </Box>

                  <Box
                    mt={2}
                    ml={10}
                    mr={10}
                    sx={{ border: 2, borderColor: "#35A0EE", borderRadius: 2 }}
                  >
                    <Checkbox {...label} />
                    <Typography pl={2} pt={3} style={{ color: "black" }}>
                      Other
                    </Typography>
                  </Box>
                </Box>
              </div>
              <Box
                component="form"
                mt={1}
                sx={{ "& > :not(style)": { m: 2, width: "25ch" } }}
                pl={10}
              >
                <Button
                  variant="text"
                  style={{ textTransform: "none", color: "#35a0ee" }}
                  onClick={this.back}
                  endIcon={<ArrowRightAltIcon />}
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
                >
                  Finish
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
    );
  }
}

export default InvestmentPref;
