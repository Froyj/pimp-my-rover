import { Box } from '@material-ui/core'
import textures from '../utils/textures'
import Texture from './Texture'

function TextureList() {
  return (
    <Box display='flex' flexDirection='row' flexWrap='wrap'>
      {textures.map(t => <Texture url={t.url} name={t.name}/>)}
    </Box>
  )
}

export default TextureList;