import { makeStyles } from "@mui/styles";

export const useErrorStyle = makeStyles(() => ({
  box_error: {
    display: "flex",
    height: "100%",
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
  },
  h2: {
    textAlign: "center",
    padding: "10px",
  },
  h5: {
    textAlign: "center",
    padding: "10px",
  },
  paragraph: {
    textAlign: "center",
    padding: "10px",
  },
  button: {
    width: '100px',
    padding: '10px 16px',
  },
}));
