import React from "react";
import reactDom from "react-dom";
import ContactDetails from "./ContactDetails";

class UserForm extends React.Component {
  state = {
    step: 1,
    fullname: "",
    phone: "",
    email: "",
    country: "",
  };

  //procees to next step
  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1,
    });
  };

  //Go back to prev
  prevStep = () => {
    const { step } = this.state;

    this.setState({
      step: step - 1,
    });
  };

  //handle change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { fullname, phone, email, country } = this.state;

    const values = { fullname, phone, email, country };

    switch (step) {
      case 1:
        return (
          <ContactDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          /> //when add attributes to a components those are props
        );
      case 2:
        return <h1>Investment Plan</h1>;
      case 3:
        return <h1>Investment preferences</h1>;
    }
  }
}

export default UserForm;
