import {
  Grid,
  IconButton,
  FormControlLabel,
  Button,
  Typography,
  Checkbox,
  Link,
  FormControl,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Popup } from '../popup/popup';
import * as S from '../login-form/login-form.style';
import { Close as CloseIcon } from '@material-ui/icons';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

export const RegisterForm = ({ open, handleClose }) => {
  const paperStyle = {
    height: '550px',
    width: '400px',
    padding: '10px',
  };

  const buttonX = <CloseIcon />;
  const buttonCloseStyle = {
    margin: '0 0  0 360px',
    padding: '3px 10px',
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
    <Popup open={open} handleClose={handleClose}>
      <Grid path="/register-form">
        <S.StyledPaper elevation={10} style={paperStyle}>
          <IconButton style={buttonCloseStyle} onClick={handleClose}>
            {buttonX}
          </IconButton>
          <Grid align="center">
            <S.StyledTitle>Register</S.StyledTitle>
          </Grid>
          <Grid align="center">
            <S.StyledTextField
              label="Create username"
              placeholder="Create username"
              width="70%"
              required
            />
            <S.StyledTextField
              label="Enter your email"
              placeholder="Enter your email"
              width="70%"
              required
            />
            <S.StyledTextField
              label="Create new password"
              placeholder="At least one uppercase and one number"
              width="80%"
              required
              type={toggleEye ? 'text' : 'password'}
            />
            <FormControl>
              <Input
                label="Re-enter password"
                placeholder="Re-enter password"
                fullWidth
                required
                type={toggleEye ? 'text' : 'password'}
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
              <Link to="#login-form"> Login into your account</Link>
            </Typography>
          </div>
        </S.StyledPaper>
      </Grid>
    </Popup>
  );
};
