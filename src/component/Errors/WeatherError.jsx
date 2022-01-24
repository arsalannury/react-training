import { useHistory } from "react-router-dom";
import { Box , Typography} from "@mui/material";
import { useErrorStyle } from "../../styles/ErrorStyle";

function WeatherError() {
  const classes = useErrorStyle();
  return (
    <>
      <Box className={classes.box_error}>
        <img
          className={classes.img_error}
          src="https://static-cdn.icons8.com/l/animations/images/searching.gif"
          alt="not_city"
        />
         <Box>
              <Typography variant="h1">
                  What is Wrong ?
              </Typography>
          </Box>
      </Box>
    </>
  );
}
export default WeatherError;
