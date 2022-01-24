import { Toaster, toast } from "react-hot-toast";
import { useWeatherStyle } from "../styles/WeatherStyle";
import { TextField, Box, Typography, Grid, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Weather() {
  const [currents, setCurrent] = useState({});
  const [icon, getIcon] = useState("");
  const [city, setCity] = useState("");
  const [loading, isLoading] = useState(true);
  const apiKey = "71c8a69e3fa4aab23c5f0d514d5b62d8";
  const classes = useWeatherStyle();
  const [done, setDone] = useState(true);
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handlePress = async (e) => {
    if (!e.target.value) {
      toast.error('Please Choose Your City')
      return;
    } else {
      const response = await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        )
        .catch((errorr) => {
          toast.error(`${city} Not Found`);
          throw new Error("Not Found Your City");
        });
      setCurrent(response.data);
      console.log(response.data);
      setDone(false);
      getIcon(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
      e.target.value = "";
      toast.success(`${response.data.name} is Availiable`);
    }
  };

  return (
    <>
      {done ? (
        <Box className={classes.star_box}>
          <img className={classes.stars} src="stars.png" alt="star" />
          <h1 className={classes.title}>Search Weather City</h1>
        </Box>
      ) : (
        <Grid
          className={classes.grid_container}
          container
          data-aos="fade-down"
          data-aos-duration="2000"
        >
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
        </Grid>
      )}
      <Box className={classes.box_textfield}>
        <Button
          onClick={handlePress}
          className={classes.search_btn}
          variant="contained"
        >
          Search
        </Button>
        <TextField
          onChange={handleChange}
          label={"City Name"}
          className={classes.inputt}
        />
      </Box>
      <Toaster />
    </>
  );
}

export default Weather;
