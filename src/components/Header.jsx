import { makeStyles, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(() => ({
  headerTitle: {
    fontFamily: 'Dolphins',
    fontSize:'3em',
    textShadow: '-3px 0 #e91717',
    color: '#fbe202'
  }
}))

function Header() {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Typography className={classes.headerTitle}>Pimp my Rover</Typography>
    </AppBar>
  )  
}

export default Header;