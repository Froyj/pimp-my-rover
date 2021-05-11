import { Box } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ColorPicker from './ColorPicker';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextureList from './TextureList';

function CustomizationPanel() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Colors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ColorPicker />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Textures
        </AccordionSummary>
        <AccordionDetails>
        <TextureList />        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Tires</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Rims</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Armor</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Armor</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default CustomizationPanel;
