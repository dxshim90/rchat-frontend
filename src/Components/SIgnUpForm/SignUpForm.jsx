import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class SignUpForm extends React.Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    gender: "",
    dob: "",
    terms: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { terms } = this.state;
    return (
      <Form>
        <div style={{ float: "left" }}>
          <h1>Create An Account</h1>
          <h4>Its Quick And Easy</h4>
        </div>
        <FormGroup style={{ width: "20rem" }}>
          <Label for="email">Email Address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            value={this.state.email}
            onChange={this.onChange}
            required
          ></Input>
        </FormGroup>
        <FormGroup style={{ width: "20rem" }}>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password1"
            placeholder="Enter Your Password"
            value={this.state.password1}
            onChange={this.onChange}
            required
          ></Input>
        </FormGroup>
        <FormGroup style={{ width: "20rem" }}>
          <Label for="password">Confirm Password</Label>
          <Input
            type="password"
            name="password2"
            placeholder="Confirm Your Password"
            value={this.state.password2}
            onChange={this.onChange}
            required
          ></Input>
        </FormGroup>
        <FormGroup style={{ width: "20rem" }}>
          <Label>Gender</Label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "1rem",
              backgroundColor: "white"
            }}
          >
            <Label check>
              <Input
                onChange={this.onChange}
                type="radio"
                name="gender"
                value="Male"
              />{" "}
              Male
            </Label>
            <Label check>
              <Input
                onChange={this.onChange}
                type="radio"
                name="gender"
                value="Female"
              />{" "}
              Female
            </Label>
            <Label check>
              <Input
                onChange={this.onChange}
                type="radio"
                name="gender"
                value="Other"
              />{" "}
              Other
            </Label>
          </div>
        </FormGroup>
        <FormGroup style={{ width: "20rem" }}>
          <Label for="exampleDate">Date Of Birth</Label>
          <Input
            type="date"
            name="dob"
            placeholder="Date Of Birth"
            onChange={this.onChange}
            value={this.state.dob}
          />
        </FormGroup>
        <FormGroup style={{ width: "20rem" }} check>
          <Label check>
            <Input
              type="checkbox"
              onClick={() =>
                this.setState({
                  terms: !terms
                })
              }
            />{" "}
            Agree To Terms and Conditions
          </Label>
        </FormGroup>
        <Button
          size="lg"
          color="success"
          style={{ float: "left", marginLeft: "6rem", marginTop: "1rem" }}
        >
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default SignUpForm;
