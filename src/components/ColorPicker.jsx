import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useContext } from 'react';
import { CompactPicker } from 'react-color';
import CustomizationContext from '../context/CustomizationContext';
import { CHANGE_SELECTED_COLOR } from '../actions/customizationActions';

const useStyles = makeStyles(() => ({
  sampleColor: {
    backgroundColor: (props) => props.selectedColor,
  },
}));

function ColorPicker() {
  const { state, dispatch } = useContext(CustomizationContext);
  const classes = useStyles({ selectedColor: state.selectedColor });

  return (
    <>
      <CompactPicker
        color={state.selectedColor}
        onChangeComplete={(color) => 
          dispatch({ type: CHANGE_SELECTED_COLOR, payload: color.hex })}
      />
      <Box width={50} height={50} className={classes.sampleColor}></Box>
    </>
  );
}

export default ColorPicker;
