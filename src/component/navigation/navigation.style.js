import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    padding: '10px',
    height: '40px',
    width: '100%',
    zIndex: 3,
    background: 'linear-gradient(158deg, rgba(2,0,36,1) 0%, rgba(4,4,47,1) 0%, rgba(4,4,47,1) 24%, rgba(4,17,60,1) 55%, rgba(0,212,255,1) 100%)', 
    // transition: 'opacity .5s ease-in',

  //   '&::before': {
  //     content: '"',
  //     width: '100%',
  //     height: '100%',
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     zIndex: -1,
  //     backgroundColor: 'linear-gradient(to top, #3f82c3, #011a33)',
  //   }
  },
  nav: {
   textAlign: 'right',
   marginRight: '20px',
  },
  link: {
    marginRight: '10px',
    fontSize: '13px',
    textDecoration: 'none',
    color: 'black',
    border: '2p solid black',
  }
}))
