import { makeStyles } from "@mui/styles";

export const useWeatherStyle = makeStyles(() => ({
  inputt: {
    width: "70%",
    margin: "auto !important",
  },
  icon: {
    width: "35%",
  },
  box_icon: {
    width: "100%",
  },
  grid_container: {
    boxShadow: "0 18px 20px #888",
    padding: "20px",
    margin: "100px",
    minHeight: "500px",
    width: "450px !important",
    borderRadius: "10px",
    flexDirection: "column !important",
    alignItems: "center",
    // backdropFilter: 'blur(22px) saturate(99%)',
    // backgroundColor: 'rgba(255, 255, 255, 0.58)',
    // borderRadius: '12px',
    // border: '1px solid rgba(209, 213, 219, 0.3)',
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
   
    
    background:
      "linear-gradient(to right, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))",
      WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description : {
    width: '100%',
    direction: 'ltr',
    display: 'flex',
    flexDirection: 'column !important',
    justifyContent: 'space-between',
    padding: '10px',
  },
  situation : {
    width: '115px',
    borderBottom: '1px solid #ddd',
},
box_wind : {
    display: 'flex',
    flexDirection: 'column !important',
    justifyContent: 'space-between',
    alignItems : 'center',
    padding: '10px',
    width : '100%',
},
wind : {
    width: '100%',
    display: 'flex',
    direction: 'ltr',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding : '15px',
},
title_wind : {
    borderBottom : '1px solid #ddd',
},
city : {
    fontSize: '3em',
    padding: '30px',
},
temp_main : {
    width: '100%',
    display: 'flex',
    direction: 'ltr',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding : '15px',
},
box_temp : {
    width: '100%',
    display: 'flex',
    padding: '10px',
    alignItems: 'center',
    flexDirection: 'column !important',
    justifyContent: 'space-between',
},
title_temp : {
    borderBottom : '1px solid #ddd',
}
}));
