import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    padding: '10px',
    height: '40px',
    width: '100%',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',

    background: 'linear-gradient(158deg, rgba(2,0,36,1) 0%, rgba(4,4,47,1) 0%, rgba(4,4,47,1) 24%, rgba(4,17,60,1) 55%, rgba(0,212,255,1) 100%)',
    transition: 'opacity .5s ease-in',
  },
  nav: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'fixed',

  },
  navLogo: {
    alignSelf: 'left',
  },
  link: {
    fontSize: '18px',
    textDecoration: 'none',
    color: 'black',
    border: '2px solid grey',
    borderRadius: '13px',
    width: 'auto',
    backgroundColor: 'white',
    padding: '8px',
    marginRight: '20px',

    '&&:hover': {
      transition: '250ms',
      backgroundColor: 'black',
      color: '#fff',
    },
  },
  logo: {
    left: 0,
    top: 0,
  heigh: '50px',
  width: '150px',
  position: 'fixed'
  },
}));
