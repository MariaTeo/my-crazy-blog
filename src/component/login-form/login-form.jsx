import {
  Grid,
  IconButton,
  FormControlLabel,
  Link,
  Typography,
  Checkbox,
  Button,
} from '@material-ui/core';
import React, { useState, useRef } from 'react';
import { Popup } from '../popup/popup';
import * as LF from './login-form.style';
import {
  Visibility as VisibilityIcon,
  Close as CloseIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';
import { Formik, Form, Field } from 'formik';

const initialLoginValues = {
  username: '',
  email: '',
  password: '',
};

const validate = (values) => {
  const error = {};

  if (values.username && values.username.length < 6) {
    error.username = 'Username must be minimum 6 letters.';
  }

  return error;
};

export const LoginForm = ({ open, handleClose }) => {
  const emailRef = useRef();
  const paperStyle = {
    height: '500px',
    width: '400px',
    padding: '10px',
  };

  const questionsStyle = { margin: '30px 30px' };
  const loginStyle = {
    width: '360px',
    marginLeft: '20px',
    marginTop: '10px',
  };

  const buttonCloseStyle = {
    margin: '0 0  0 360px',
    padding: '3px 10px',
  };

  const eyeStyle = {
    display: 'flex',
    alignSelf: 'right',
    justifyContent: 'right',
    marginTop: '-40px',
    marginRight: '5px',
  };

  const rememberStyle = {
    marginTop: '50px',
    marginLeft: '40px',
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  console.log(passwordShown);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
      <Formik
        initialValues={initialLoginValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ values, isValid }) => (
          <Form>
            <Grid>
              <LF.StyledPaper elevation={10} style={paperStyle}>
                <IconButton
                  type="button"
                  style={buttonCloseStyle}
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>

                <Grid align="center">
                  <LF.StyledTitle>Log In</LF.StyledTitle>
                </Grid>

                <Grid align="center">
                  <Field
                    label="Email"
                    placeholder="Enter email"
                    component={LF.StyledTextField}
                    fullWidth
                    required
                    inputRef={emailRef}
                    type="email"
                    name="email"
                    id="email"
                  />
                  <Field
                    label="Username"
                    placeholder="Enter username"
                    fullWidth
                    required
                    component={LF.StyledTextField}
                    type="text"
                    name="username"
                    id="username"
                  />
                  <Field
                    label="Password"
                    placeholder="Enter password"
                    fullWidth
                    required
                    type={passwordShown ? 'text' : 'password'}
                    component={LF.StyledTextField}
                    name="password"
                    id="password"
                  />
                  <IconButton onClick={togglePasswordVisibility}>
                    {passwordShown && <VisibilityIcon />}
                    {!passwordShown && <VisibilityOffIcon />}
                  </IconButton>
                </Grid>
                <FormControlLabel
                  control={<Checkbox name="checkedBox" color="primary" />}
                  label="Remember me"
                  style={rememberStyle}
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={loginStyle}
                  fullWidth
                >
                  Log in
                </Button>
                <div style={questionsStyle}>
                  <Typography>
                    <Link href="#">Forgot password?</Link>
                  </Typography>
                  <Typography>
                    {' '}
                    No account?
                    <Link href="/register"> Register</Link>
                  </Typography>
                </div>
              </LF.StyledPaper>
            </Grid>
          </Form>
        )}
      </Formik>
  );
};
