import { useWeather } from "../Context/WeatherContext";
import { Grid } from "@mui/material";
import { useWeatherStyle } from "../styles/WeatherStyle";
import { Typography } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useState } from "react";

import axios from "axios";

function Weather() {
  const [currents, setCurrent] = useState({});
  const [icon, getIcon] = useState("");
  const [city, setCity] = useState("");
  const apiKey = "71c8a69e3fa4aab23c5f0d514d5b62d8";
  const lang = "fa";
  const context = useWeather();
  const classes = useWeatherStyle();
  const [done, setDone] = useState(true);
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handlePress = async (e) => {
    if (e.key === "Enter") {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setCurrent(response.data);
      console.log(response.data);
      setDone(false);
      getIcon(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
      e.target.value = "";
    }
  };

  return (
    <>
      {done ? (
        <h1 className={classes.title}>Search Weather City</h1>
      ) : (
        <Grid className={classes.grid_container} container>
          <Grid item className={classes.box_icon}>
            <img src={icon} alt="icon_weather" className={classes.icon} />
          </Grid>
          <Grid item className={classes.description}>
            <Typography className={classes.situation}>
              Situation Weather
            </Typography>
            <Typography>{currents.weather[0].description}</Typography>
          </Grid>
          <Grid item className={classes.wind}>
            <Box className={classes.box_wind}>
              <Typography className={classes.title_wind}>Wind Speed</Typography>
              <Typography>{currents.wind.speed}</Typography>
            </Box>
            <Box className={classes.box_wind}>
              <Typography className={classes.title_wind}>Wind Deg</Typography>
              <Typography>{currents.wind.deg}</Typography>
            </Box>
          </Grid>
          <Typography className={classes.city}>{currents.name}</Typography>
          <Box className={classes.temp_main}>
            <Box className={classes.box_temp}>
              <Typography className={classes.title_temp}>Temp</Typography>
              <Typography>{currents.main.temp}</Typography>
            </Box>
            <Box className={classes.box_temp}>
              <Typography className={classes.title_temp}>Feels like Temp</Typography>
              <Typography>{currents.main.feels_like}</Typography>
            </Box>
          </Box>
        </Grid>
      )}
      <Box className={classes.box_textfield}>
        <TextField
          onKeyPress={handlePress}
          onChange={handleChange}
          className={classes.inputt}
        />
      </Box>
    </>
  );
}

export default Weather;
