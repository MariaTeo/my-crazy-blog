import { Button } from '@material-ui/core';
import { Link } from '@reach/router';
import React, { useState } from 'react';
import { ABOUT, CONTACT, MY_PROJECTS } from '../../constants/routes';
import { LoginForm } from '../login-form/login-form';
import { RegisterForm } from '../register-form/register-form';
import { useStyles } from './navigation.style';

export const Navigation = () => {
  const classes = useStyles();
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenRegister = () => {
    setOpenRegister(true);
  };
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };



  
  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <Button onClick={handleOpenLogin} variant="contained" color="primary">
          Log in
        </Button>
        <Button onClick={handleOpenRegister} color="secondary">
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
      <LoginForm open={openLogin} handleClose={handleCloseLogin} />
      <RegisterForm open={openRegister} handleClose={handleCloseRegister} />
    </div>
  );
};
