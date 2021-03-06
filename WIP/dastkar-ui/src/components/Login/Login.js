import React from "react";
import classes from "./Login.module.css";
import Form from "../Form/Form";
import FormRow from "../Form/FormRow/FormRow";
import Input from "../UI/Input/Input";
import FormButtonSet from "../Form/FormButtonSet/FormButtonSet";
import SocialSignIns from "../SocialSignIns/SocialSignIns";

const Login = (props) => {
  return (
    <div className={classes.Login}>
      <h3>Login</h3>
      <Form onSubmit={props.onSubmit}>
        <FormRow label="Username" for="username">
          <Input
            type="text"
            placeholder="Your Username"
            name="username"
            id="username"
            autoComplete="username"
          />
        </FormRow>
        <FormRow label="Password" for="password">
          <Input
            type="password"
            placeholder="Your Password"
            name="password"
            id="password"
            autoComplete="current-password"
          />
        </FormRow>
        <FormButtonSet setType="login" submitName="Sign In"/>
        <p>- OR -</p>
        <br />
        <SocialSignIns />
      </Form>
    </div>
  );
};

export default Login;
