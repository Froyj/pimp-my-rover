import { Box } from '@material-ui/core';
import CustomizationContext from '../context/CustomizationContext';
import { makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { CHANGE_SELECTED_TEXTURE } from '../actions/customizationActions';

const useStyles = makeStyles(() => ({
  imgTexture: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    margin: '2px',
  },
}));

function TextureItem({ url }) {
  const classes = useStyles();
  const { state, dispatch } = useContext(CustomizationContext);
  return (
    <Box display='flex' flexDirection='row'>
      <div
        className={classes.imgContainer}
        onClick={() =>
          dispatch({ type: CHANGE_SELECTED_TEXTURE, payload: url })
        }
      >
        <img src={url} className={classes.imgTexture} />
      </div>
    </Box>
  );
}

export default TextureItem;
