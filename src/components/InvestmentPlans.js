import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

const marks = [
  {
    value: 0,
    label: "$10,000",
  },
  {
    value: 20,
    label: "$50,000",
  },
  {
    value: 40,
    label: "$100,000",
  },
  {
    value: 60,
    label: "$200,000",
  },
  {
    value: 80,
    label: "$500,000",
  },
  {
    value: 100,
    label: "$1,000,000",
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

class InvestmentPlans extends React.Component {
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
                    Save from thousands to millions on your deal. Secure the best possible. And get independent,
                    unbaiased advise for free
                  </p>
                  <p>
                    Jodie Sears
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
                    step 2 from 3
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
                Investment Plans
              </Typography>
              <Typography style={{ color: "gray" }} pl={10}>
                <p>
                  Let us know about your investment plans. This will help us to
                  get{" "}
                  <div>you to the right expert who will help you further. </div>
                </p>
              </Typography>
              <Box
                component="form"
                mt={1}
                sx={{ "& > :not(style)": { m: 2, width: "25ch" } }}
                pl={10}
              >
                <Typography
                  sx={{ fontWeight: "Bold" }}
                  variant="h6"
                  align="left"
                  pt={1}
                >
                  How much are you planing to invest in this year?
                </Typography>

                <TextField
                  id="from"
                  label="From"
                  variant="standard"
                  defaultValue={values.salary_from}
                  onChange={handleChange("salary_from")}
                />
                <TextField
                  id="to"
                  label="To"
                  variant="standard"
                  defaultValue={values.salary_to}
                  onChange={handleChange("salary_to")}
                />
                <div>
                  <Box sx={{ width: 500 }}>
                    <Slider
                      aria-label="Invest Range"
                      defaultValue={20}
                      valueLabelFormat={valueLabelFormat}
                      getAriaValueText={valuetext}
                      step={null}
                      valueLabelDisplay="auto"
                      marks={marks}
                    />
                  </Box>
                </div>

                <Typography
                  sx={{ fontWeight: "Bold" }}
                  variant="h6"
                  align="left"
                  pt={1}
                >
                  <p style={{ width: "60ch" }}>
                    Are you an accredited investor?
                  </p>
                </Typography>

                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>

                <br />

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

export default InvestmentPlans;
