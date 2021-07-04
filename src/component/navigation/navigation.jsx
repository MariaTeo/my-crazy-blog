import { Button } from '@material-ui/core';
import { Link } from '@reach/router';
import React, { useState } from 'react';
import { ABOUT, CONTACT, LOGIN, MY_PROJECTS, REGISTER } from '../../constants/routes';
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
        <Link className={classes.link} to={ABOUT}>
          About me
        </Link>
        <Link className={classes.link} to={CONTACT}>
          Contact
        </Link>
        <Link className={classes.link} to={MY_PROJECTS}>
          My projects
        </Link>
        <Link className={classes.link} to={LOGIN}>
          Login
        </Link>
        <Link className={classes.link} to={REGISTER}>
          REgister
        </Link>
      </nav>
    </div>
  );
};
