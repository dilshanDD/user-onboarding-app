import React from "react";

import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class ContactDetails extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <Box sx={{flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item sx={{ bgcolor: '#35a0ee', color: 'primary.contrastText', p: 2 }}>Blue Area</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <TextField
                  label="Full name"
                  defaultValue={values.fullname}
                  onChange={handleChange("fullname")}
                />
                <TextField
                  label="Phone number"
                  defaultValue={values.phone}
                  onChange={handleChange("phone")}
                />

                <br />
                <TextField
                  label="Email"
                  defaultValue={values.email}
                  onChange={handleChange("email")}
                />
                <br />
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel>Country</InputLabel>
                    <Select onChange={handleChange("country")} label="Country">
                      <MenuItem value={"Sri-Lanka"}>Sri-Lanka</MenuItem>
                      <MenuItem value={"India"}>India</MenuItem>
                      <MenuItem value={"Australia"}>Australia</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <br />
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

export default ContactDetails;
