import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    height: '80px',
    width: '100%',
    zIndex: 3,
    top: 0,
    left: 0,
    transition: 'opacity .5s easi-in',
  
    '&::before': {
      content: '"',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      background: 'linear-gradient(to top, #3f82c3, #011a33)',
     }
  },
  
}))
