import { Skeleton } from "@mui/material";
import { useWeatherStyle } from "../../styles/WeatherStyle";

function WeatherLoading() {
  const classes = useWeatherStyle();
  return(
      <>
      <div className={classes.weatherLoading}>
      <Skeleton width={500} height={550} />
      </div>
      </>
  )
}

export default WeatherLoading;
