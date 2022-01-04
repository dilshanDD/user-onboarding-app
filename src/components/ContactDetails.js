import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";

class ContactDetails extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
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
              <div>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h4"
                  align="left"
                  pt={5}
                >
                  Contact Details
                </Typography>
                <Typography style={{ color: "gray" }}>
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
                  <p style={{ width: "60ch", color: "gray" }}>
                    We know you care about how your personal information is used
                    and
                    <div>shared, so we take your privacy seriously</div>
                  </p>
                  <Button
                    variant="text"
                    style={{ textTransform: "none", color: "#35a0ee" }}
                    // endIcon={<ArrowRightAltIcon />}
                  >
                    Expand privacy policy
                  </Button>
                </div>
                <br />

                <Button
                  variant="text"
                  style={{ textTransform: "none", color: "#35a0ee" }}
                  // endIcon={<ArrowRightAltIcon />}
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
