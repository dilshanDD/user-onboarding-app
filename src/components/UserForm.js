import React from "react";
import ContactDetails from "./ContactDetails";
import InvestmentPlans from "./InvestmentPlans";

class UserForm extends React.Component {
  state = {
    step: 1,
    fullname: "",
    phone: "",
    email: "",
    country: "",
    salary_from: "",
    salary_to: "",
    accredited: "",
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
    const { fullname, phone, email, country, salary_from, salary_to } =
      this.state;

    const values = { fullname, phone, email, country, salary_from, salary_to };

    switch (step) {
      case 1:
        return (
          <ContactDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          /> //when add attributes to a components those are props
        );
      case 2:
        return (
          <InvestmentPlans
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          /> //when add attributes to a components those are props
        );
      case 3:
        return <h1>Investment preferences</h1>;
    }
  }
}

export default UserForm;
