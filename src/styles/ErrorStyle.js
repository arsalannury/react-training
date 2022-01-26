import { makeStyles } from "@mui/styles";

export const useErrorStyle = makeStyles(() => ({
  box_error: {
    display: "flex",
    height: "100%",
    "@media screen and (max-width : 450px)" : {
      height: "unset",
    }
  },
  text_box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    marginTop: "150px",
    fontWight: 'bold',
  },
  img_error: {
    width: "100%",
    padding: "10px",
    marginTop: "180px",
    "@media screen and (max-width : 450px)" : {
      marginTop : '130px',
    }
  },
  h2: {
    textAlign: "center",
    padding: "10px",
    "@media screen and (max-width : 450px)" : {
      fontSize : '3em !important',
    }
  },
  h5: {
    textAlign: "center",
    padding: "10px",
    color: '#222',
  },
  paragraph: {
    textAlign: "center",
    padding: "10px",
    color: '#222',
    "@media screen and (max-width : 450px)" : {
      fontSize : '.9em',
    }
  },
  button: {
    width: '100px',
    padding: '10px 16px !important',
    marginTop: '30px !important',
  }, 
  grid_item_text : {
    "@media screen and (max-width : 450px)" : {
      width : '100%',
    },
    "@media screen and (min-width : 451px) and (max-width : 600px)" : {
      width : '100%',
    }
  }
}));
