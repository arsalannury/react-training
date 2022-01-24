import { makeStyles } from "@mui/styles";

export const useWeatherStyle = makeStyles(() => ({
  inputt: {
    width: "70%",
    margin: "0 !important",
    outline: "none",
    direction: "ltr",
  },
  icon: {
    width: "35%",
  },
  box_icon: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  map_href:{
    alignSelf: 'flex-start',
  },
  map_img : {
    width: '35px',
    opacity: '.2',
    transition: 'all .5s ease',
    '&:hover' : {
      opacity: '1'
    }
  },
  grid_container: {
    boxShadow: "12.31px 12.31px 23px #CACCCF, -12.31px -12.31px 23px #FFFFFF",
    backgroundImage: "linear-gradient(rgb(243, 244, 246), rgb(209, 213, 219))",
    padding: "20px",
    margin: "100px auto",
    minHeight: "500px",
    width: "450px !important",
    borderRadius: "10px",
    flexDirection: "column !important",
    alignItems: "center",
  },
  box_textfield: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center !important",
  },
  title: {
    fontSize: "3em",
    textAlign: "center",
    margin: "100px",

    background:
      "linear-gradient(to right, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    width: "100%",
    direction: "ltr",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #fff",
  },
  situation: {
    fontWeight: "bold",
  },
  box_wind_one: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "10px",
    width: "100%",
    borderRight: "1px solid #fff",
  },
  box_wind_two: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "10px",
    width: "100%",
  },
  wind: {
    width: "100%",
    display: "flex",
    direction: "ltr",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
    borderBottom: "1px solid #fff",
  },
  title_wind: {
    fontWeight: "bold",
  },
  city_box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  city: {
    fontSize: "3em !important",
    padding: "30px",
  },
  temp_main: {
    width: "100%",
    display: "flex",
    direction: "ltr",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
    borderTop: "1px solid #fff",
  },
  box_temp_one: {
    width: "100%",
    display: "flex",
    padding: "10px",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRight: "1px solid #fff",
  },
  box_temp_two: {
    width: "100%",
    display: "flex",
    padding: "10px",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title_temp: {
    fontWeight: "bold",
  },
  weatherLoading: {
    padding: "20px",
    margin: "100px auto",
    borderRadius: "10px",
  },
  star_box: {
    Zindex: "10px",
    position: "relative",
  },
  stars: {
    position: "absolute",
    right: "218px",
    top: "-37px",
    Zindex: "-1",
  },
  search_btn: {
    padding: "15px 16px !important",
  },

  acordion: {
    backgroundColor: "inherit !important",
    minWidth: "360px",
  },

  detail_box_one: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
  },
  detail_box_two: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px solid #fff",
    padding: "10px",
  },
  details_box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "50%",
    direction: "ltr",
  },
  details_box_border : {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "50%",
    direction: "ltr",
    borderRight: '1px solid #fff',
  },
 
}));
