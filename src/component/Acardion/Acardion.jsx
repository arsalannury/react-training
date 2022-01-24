import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { useWeatherStyle } from "../../styles/WeatherStyle";


function Acardion({ details }) {
  const classes = useWeatherStyle()
  return (
    <>
      <Accordion className={classes.acordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Temp Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.detail_box_one}>

            <Box className={classes.details_box}>
              <Typography>Humidity</Typography>
              <Typography>{details.humidity }</Typography>
            </Box>
            <Box className={classes.details_box_border}>
                <Typography>pressure</Typography>
                <Typography>{details.pressure}</Typography>
            </Box>

          </Box>



          <Box className={classes.detail_box_two}>

          <Box className={classes.details_box}>
              <Typography>TempMax</Typography>
              <Typography>{details.temp_max}</Typography>
            </Box>

            <Box className={classes.details_box_border}>
              <Typography>TempMin</Typography>
              <Typography>{details.temp_min}</Typography>
            </Box>

          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Acardion;
