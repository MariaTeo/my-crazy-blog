import { Button } from '@material-ui/core'
import { Link } from '@reach/router'
import React, { useState } from 'react'
import { ABOUT, CONTACT, MY_PROJECTS } from '../../constants/routes'
import { LoginForm } from '../login-form/login-form'
import { useStyles } from './navigation.style'


export const Navigation = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const openPopup = () => {
    setOpen(true)
  }
  
  const closePopup = () => {
    setOpen(false)
  }

  console.log(open)

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <Button onClick={openPopup} variant='contained' color='grey'>
          Log in
        </Button>
        <Button  color='secondary' >
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
    <LoginForm open={open} handleClose={closePopup} />
    </div>
  )
}
