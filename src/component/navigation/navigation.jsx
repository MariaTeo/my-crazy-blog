import { Button } from '@material-ui/core';
import { Link } from '@reach/router';
import React, { useState } from 'react';
import { ABOUT, CONTACT, MY_PROJECTS } from '../../constants/routes';
import { LoginForm } from '../login-form/login-form';
import { RegisterForm } from '../register-form/register-form';
import { useStyles } from './navigation.style';

export const Navigation = () => {
  const classes = useStyles();
  const [loginOrRegister, setLoginOrRegister] = useState(null);

  const handleOpen = (panel) => {
    setLoginOrRegister(panel);
  };

  const handleClose = () => {
    setLoginOrRegister(null);
  };


  console.log(loginOrRegister)
  
  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <Button onClick={() => handleOpen('login')} variant="contained" color="primary">
          Log in
        </Button>
        <Button onClick={() => handleOpen('register')} color="secondary">
          Register
        </Button>
        <Link className={classes.link} to={ABOUT}>
          About me
        </Link>
        <Link className={classes.link} to={CONTACT}>
          Contact
        </Link>
        <Link className={classes.link} to={MY_PROJECTS}>
          My projects
        </Link>
      </nav>
      <LoginForm open={loginOrRegister === 'login'} handleClose={handleClose} />
      {/* <RegisterForm open={loginOrRegister === 'register'} handleClose={handleClose} /> */}
    </div>
  );
};
