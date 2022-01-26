import { useHistory } from "react-router-dom";
import { Box , Typography , Grid ,Button} from "@mui/material";
import { useErrorStyle } from "../../styles/ErrorStyle";

function WeatherError() {
  const classes = useErrorStyle();
  const history = useHistory();
  const handleHome = () => {
   history.replace('/')
  }
  return (
    <>
      <Grid container className={classes.box_error}>
       <Grid item sm={12} md={6} lg={4} >
       <img
          className={classes.img_error}
          src="404.png"
          alt="not_city"
        />
       </Grid>
         <Grid item sm={12} md={6} lg={8} className={classes.grid_item_text}>
             <Box className={classes.text_box}>
             <Typography variant="h2" className={classes.h2}>
                  What is Wrong ?
              </Typography>
              <Typography variant="h5" className={classes.h5}>
                Your Request is Faild
              </Typography>
              <Typography className={classes.paragraph}>
                It means there is no this city for show weather information
              </Typography>
              <Button variant='contained' className={classes.button} onClick={handleHome}>
               Home
              </Button>
             </Box>
          </Grid>
      </Grid>
    </>
  );
}
export default WeatherError;
