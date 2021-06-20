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

  return (
    <div className={classes.root}>
      <nav>
        <Button onClick={openPopup} variant='outlined' color='primary'>
          Log in
        </Button>
        <Button color='secondary' >
          Register
        </Button>
        <Link to={ABOUT}>
          About me
        </Link>
        <Link to={CONTACT}>
          Contact
        </Link>
        <Link to={MY_PROJECTS}>
          My projects
        </Link>
      </nav>
    <LoginForm open={open} handleClose={closePopup} />
    </div>
  )
}
