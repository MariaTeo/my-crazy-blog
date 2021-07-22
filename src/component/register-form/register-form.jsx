import {
  Grid,
  IconButton,
  FormControlLabel,
  Button,
  Typography,
  Checkbox,
  FormControl,
} from '@material-ui/core';
import React, { useState } from 'react';
import * as S from '../login-form/login-form.style';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { Link } from '@reach/router';
import { auth } from '../../config/firebase-config';

export const RegisterForm = ({ open }) => {
  const initialRegisterValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    auth.createUserWithEmailAndPassword(email, password);
    resetForm();
    console.log(values);
  };

  const paperStyle = {
    height: '550px',
    width: '400px',
    padding: '10px',
  };

  const rememberMeStyle = {
    margin: '15px 20px 10px',
  };

  const questionStyle = { margin: '30px 30px' };
  const registerMeStyle = {
    width: '330px',
    marginLeft: '30px',
  };

  const [toggleEye, setToggleEye] = useState(false);
  const handleToggleEye = () => {
    setToggleEye(!toggleEye);
  };

  return (
    <Formik
      initialValues={initialRegisterValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values }) => (
        <Form>
          <Grid>
            <S.StyledPaper elevation={10} style={paperStyle}>
              <Grid align="center">
                <S.StyledTitle>Register</S.StyledTitle>
              </Grid>
              <Grid align="center">
                <Field
                  component={TextField}
                  label="Enter your email"
                  placeholder="Enter your email"
                  width="70%"
                  required
                  name="email"
                  type="email"
                  id="email"
                />
                <Field
                  component={TextField}
                  label="Create new password"
                  placeholder="At least one uppercase and one number"
                  width="80%"
                  required
                  type={toggleEye ? 'text' : 'password'}
                  name="password"
                  id="password"
                />
                <FormControl>
                  <Input
                    label="Re-enter password"
                    placeholder="Re-enter password"
                    fullWidth
                    required
                    type={toggleEye ? 'text' : 'password'}
                    name="confirm-password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handleToggleEye}>
                          <>
                            {toggleEye && (
                              <VisibilityIcon onClick={handleToggleEye} />
                            )}
                            {!toggleEye && (
                              <VisibilityOffIcon onClick={handleToggleEye} />
                            )}
                          </>
                        </IconButton>
                      </InputAdornment>
                    }
                  ></Input>
                </FormControl>
              </Grid>
              <FormControlLabel
                control={<Checkbox name="checkedBox" color="primary" />}
                label="Remember my details"
                style={rememberMeStyle}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={registerMeStyle}
                fullWidth
              >
                Register
              </Button>
              <div style={questionStyle}>
                <Typography>
                  Already have an account?
                  <Link to="/login"> Login into your account</Link>
                </Typography>
              </div>
            </S.StyledPaper>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
