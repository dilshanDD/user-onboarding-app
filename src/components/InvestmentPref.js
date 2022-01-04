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
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

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
              <div>
                <Stepper />
              </div>
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
              >
                Investment Preferences
              </Typography>
              <Typography style={{ color: "gray" }}>
                <p>
                  This will help us figue out what your investment options are
                  so
                  <div>
                    that we can show you only possibly interesting for you
                    details.
                  </div>
                </p>
              </Typography>
              <Box
                component="form"
                mt={1}
                sx={{ "& > :not(style)": { m: 2, width: "25ch" } }}
              >
                <Typography
                  sx={{ fontWeight: "Bold" }}
                  variant="h6"
                  align="left"
                  pt={1}
                >
                  What kind of real estate are you interested in?
                </Typography>

                <div>

                    //grid
                </div>

               

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

export default InvestmentPref;
