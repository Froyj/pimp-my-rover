import { Suspense } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({}));

function RoverScene() {
  return (
    <Box>
      <iframe
        src='https://mars.nasa.gov/gltf_embed/25042'
        width='100%'
        height='450px'
        frameborder='0'
      />
    </Box>
  );
}

export default RoverScene;
