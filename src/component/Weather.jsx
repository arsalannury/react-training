import Acardion from "./Acardion/Acardion";
import { Toaster, toast } from "react-hot-toast";
import { useWeatherStyle } from "../styles/WeatherStyle";
import { TextField, Box, Typography, Grid, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";

function Weather() {
  const [currents, setCurrent] = useState({});
  const [icon, getIcon] = useState("");
  const [city, setCity] = useState("");
  const [loading, isLoading] = useState(true);
  const [disable, setDisable] = useState(true);
  const [value,setValue] = useState('');
  const apiKey = "71c8a69e3fa4aab23c5f0d514d5b62d8";
  const classes = useWeatherStyle();
  const [done, setDone] = useState(true);
  const history = useHistory();
  const handleChange = (e) => {
    setCity(e.target.value);
    e.target.value.length >= 3 ? setDisable(false) : setDisable(true);
    setValue(e.target.value);
  };

  const handlePress = async (e) => {
    isLoading(false);
    const response = await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
      .catch((errorr) => {
        setValue('');
        history.replace('/notFound');
        throw new Error("Not Found Your City");
      });
    setCurrent(response.data);
    isLoading(true);
    setDone(false);
    getIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    toast.success(`${response.data.name} is Availiable`);
    setValue('');
  };

  return (
    <>
      <Box className={classes.header}>
        <img className={classes.world} src="world.png" alt="header_icon" />
      </Box>
      {done ? (
        <Box className={classes.title_box}>
          <h1 className={classes.title}>Search Weather City</h1>
        </Box>
      ) : (
        <Grid className={classes.grid_container} container>
          <Grid item className={classes.box_icon}>
            <img src={icon} alt="icon_weather" className={classes.icon} />
            <a
              target="_blank"
              href={`https://www.google.com/maps/place/${currents.coord.lat},${currents.coord.lon}`}
              className={classes.map_href}
            >
              <img className={classes.map_img} src="map.png" alt="map_image" />
            </a>
          </Grid>
          <Grid item className={classes.description}>
            <Typography className={classes.situation}>
              Situation Weather
            </Typography>
            <Typography>{currents.weather[0].description}</Typography>
          </Grid>
          <Grid item className={classes.wind}>
            <Box className={classes.box_wind_one}>
              <Typography className={classes.title_wind}>Wind Speed</Typography>
              <Typography>{currents.wind.speed}</Typography>
            </Box>
            <Box className={classes.box_wind_two}>
              <Typography className={classes.title_wind}>Wind Deg</Typography>
              <Typography>{currents.wind.deg}</Typography>
            </Box>
          </Grid>
          <Box className={classes.city_box}>
            <Typography className={classes.city}>{currents.name}</Typography>
            <Typography>{currents.sys.country}</Typography>
          </Box>
          <Box className={classes.temp_main}>
            <Box className={classes.box_temp_one}>
              <Typography className={classes.title_temp}>Temp</Typography>
              <Typography>{currents.main.temp} C</Typography>
            </Box>
            <Box className={classes.box_temp_two}>
              <Typography className={classes.title_temp}>Feels like</Typography>
              <Typography>{currents.main.feels_like} C</Typography>
            </Box>
          </Box>
          <Acardion details={currents.main} />
        </Grid>
      )}
      <Box className={classes.box_textfield}>
        <TextField
          onChange={handleChange}
          label={"City Name"}
          className={classes.inputt}
          value={value}
        />
        <Button
          disabled={disable}
          onClick={handlePress}
          className={classes.search_btn}
          variant="contained"
        >
          {loading ? (
            <span>Search</span>
          ) : (
            <CircularProgress
              sx={{
                width: "26px !important",
                height: "26px !important",
                color: "#fff",
              }}
            />
          )}
        </Button>
      </Box>
      <Toaster />
    </>
  );
}

export default Weather;
