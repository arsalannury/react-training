import { useWeather } from "../Context/WeatherContext";
import {Grid} from '@mui/material';
import {useWeatherStyle} from '../styles/WeatherStyle';


function Weather() {
 const context = useWeather();
 const classes = useWeatherStyle();
  return(
      <>
     <Grid container>
     <Grid item>
         <img src='' alt="" className={classes.icon} />
     </Grid>
     {/* <Grid item>{context.currents.temp_c}</Grid>     */}
     </Grid> 
      </>
  )
}

export default Weather;
