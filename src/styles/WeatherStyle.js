import { makeStyles } from "@mui/styles";

export const useWeatherStyle = makeStyles(() => ({
  inputt: {
    width: "70%",
    margin: "auto !important",
  },
  icon: {
    width: "120px",
  },
  grid_container: {
    boxShadow: "0 18px 20px #888",
    padding: "20px",
    margin: "100px",
    minHeight: "300px",
    width: "450px !important",
    borderRadius: "10px",
    flexDirection: "column !important",
    alignItems: "center",
  },
  box_textfield: {
    display: "flex",
    alignItems: "center",
    justifyContent: "cetner",
  },
  title: {
    fontSize: "3em",
    textAlign: "center",
    margin: "100px",
  },
}));
