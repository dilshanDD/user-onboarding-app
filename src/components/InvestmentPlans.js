import React from "react";

import TextField from "@mui/material/TextField";

import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];

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

    return (
      <React.Fragment>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
            <Item sx={{ bgcolor: '#35a0ee', color: 'primary.contrastText', p: 2 }}>Blue Area</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <TextField
                  label="From"
                  defaultValue={values.salary_from}
                  onChange={handleChange("salary_from")}
                />
                <TextField
                  label="To"
                  defaultValue={values.salary_to}
                  onChange={handleChange("salary_to")}
                />
                <br />
                <Box sx={{ width: "100%" }}>
                  <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
                <br />
                <div>
                  <Radio
                    checked={handleChange("accredited")}
                    onChange={handleChange("accredited")}
                    value="a"
                    label="Yes"
                    name="accredited"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <Radio
                    checked={handleChange("accredited")}
                    onChange={handleChange("accredited")}
                    value="b"
                    label="No"
                    name="accredited"
                    inputProps={{ "aria-label": "B" }}
                  />
                </div>

                <br />

                <br />
                <Button variant="contained" onClick={this.back}>
                  Back to the home
                </Button>
                <Button size="medium">Skip for now</Button>
                <Button variant="contained" onClick={this.continue}>
                  Continue
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
    );
  }
}

export default InvestmentPlans;
