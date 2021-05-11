import { Box } from "@material-ui/core";
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({

  imgTexture: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    margin: '2px'
  }
}))

function TextureItem({ url }) {
  const classes = useStyles();
  return (
    <Box display='flex' flexDirection="row" >
      <div className={classes.imgContainer}>
        <img src={url} className={classes.imgTexture}/>
      </div>
    </Box>
  )
}

export default TextureItem;