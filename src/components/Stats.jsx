import { Grid, Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

function Stats() {
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <span>Speed</span>
          <span>Style</span>
          <span>Power</span>
          <span>Bling Bling</span>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
}

export default Stats;
