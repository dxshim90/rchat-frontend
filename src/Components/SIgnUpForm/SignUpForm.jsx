import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class SignUpForm extends React.Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    gender: "",
    dob: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <Form>
        <div style={{ float: "left" }}>
          <h1>Create An Account</h1>
          <p>Its Quick And Easy</p>
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
          <Label for="gender">Gender</Label>
          <Input
            type="select"
            name="gender"
            onChange={this.onChange}
            value={this.state.gender}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Input>
        </FormGroup>
        <FormGroup style={{ width: "20rem" }}>
          <Label for="exampleDate">Date</Label>
          <Input
            type="date"
            name="dob"
            placeholder="Date Of Birth"
            onChange={this.onChange}
            value={this.state.dob}
          />
        </FormGroup>
        <Button
          size="lg"
          color="success"
          style={{ float: "left", marginLeft: "6rem" }}
        >
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default SignUpForm;
