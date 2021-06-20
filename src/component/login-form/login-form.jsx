import {
  Grid,
  IconButton,
  FormControlLabel,
  Link,
  Typography,
  Checkbox,
  TextField,
  Button,
} from '@material-ui/core';
import React from 'react';
import { Popup } from '../popup/popup';
import * as LF from './login-form.style';

export const LoginForm = ({open, handleClose}) => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const paperStyle = { paddind: 20 };

  const btnStyle = { margin: '8px 0' };
  console.log(initialValues);


  return (
    <Popup open={open} handleClose={handleClose}>
      <Grid path="/login-form">
        <IconButton />
        <LF.StyledPaper elevation={10} style={paperStyle}>
          <Grid align="center">
            <LF.StyledTitle>Log In</LF.StyledTitle>
          </Grid>
          <LF.StyledTextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
          <LF.StyledTextField
            label="Password"
            placeholder="Create password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedBox" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
          >
            Log in
          </Button>
          <Typography>
            <Link href="#">Forgot password?</Link>
          </Typography>
          <Typography>
            {' '}
            No account?
            <Link href="#">Register</Link>
          </Typography>
        </LF.StyledPaper>
      </Grid>
    </Popup>
  );
};
