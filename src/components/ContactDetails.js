import React from "react";

import TextField from "@mui/material/TextField";

import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

class ContactDetails extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
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
        <Select
          defaultValue={values.country}
          onChange={handleChange("country")}
        ></Select>
        <br />
        <Button size="medium">Skip for now</Button>
        <Button variant="contained" onClick={this.continue}>
          Continue
        </Button>
      </React.Fragment>
    );
  }
}

export default ContactDetails;
