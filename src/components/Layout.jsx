import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomizationPanel from './CustomizationPanel';
import Header from './Header';
import RoverPage from './RoverPage';

const useStyles = makeStyles((theme) => ({
  mainSection: {
    backgroundColor: '#333',
  },
  customPanel: {
    backgroundColor: '#777',
  },
}));

function Layout() {
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <Header/>
      <Grid container spacing={1}>
        <Grid item sm={8} xs={12} >
          <RoverPage />
        </Grid>
        <Grid item sm={4} xs={12} >
          <CustomizationPanel />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;
