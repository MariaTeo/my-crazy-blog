import { Link } from '@reach/router';
import React from 'react';
import {
  ABOUT,
  CONTACT,
  HOME,
  LOGIN,
  MY_PROJECTS,
  REGISTER,
} from '../../constants/routes';
import { useStyles } from './navigation.style';
import { NavLogo } from '../../constants/images';

export const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav className={classes.navLogo}>
        <img src={NavLogo} alt="logo catwoman" className={classes.logo} />
      </nav>
      <nav className={classes.nav}>
        <Link className={classes.link} to={HOME}>
          Home
        </Link>
        <Link className={classes.link} to={LOGIN}>
          Login
        </Link>
        <Link className={classes.link} to={REGISTER}>
          Register
        </Link>
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
    </div>
  );
};
