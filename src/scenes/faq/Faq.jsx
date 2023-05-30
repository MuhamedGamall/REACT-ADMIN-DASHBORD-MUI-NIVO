import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title={"FAQ"} subTitle={"Frequently Asked Questions Page"} />
      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Impotan Quastion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Impotan Quastion 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Impotan Quastion 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Impotan Quastion 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Impotan Quastion 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Impotan Quastion 6
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Impotan Quastion 7
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Impotan Quastion 8
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Impotan Quastion 9
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Impotan Quastion 10
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Impotan Quastion 11
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            lorem sed sapien ultrices ultrices sed sed sapien. Sed sed sapien
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Faq;
