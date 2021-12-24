import { useState } from "react";
import { Box } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSliderStyle } from "./SliderSyle";

const Slider = () => {
  const classes = useSliderStyle();
  let [slider, setSlider] = useState(0);
  const sliderImages = () => {
    switch (slider) {
      case 0:
        return (
          <>
            <img className={classes.img_slider} src="redux.png" alt="" />
          </>
        );
        break;
      case 1:
        return (
          <>
            <img className={classes.img_slider} src="meta-logo.png" alt="" />
          </>
        );
        break;
      case 2:
        return (
          <>
            <img
              className={classes.img_slider}
              src="logo192.png"
              alt="default_logo REACT"
            />
          </>
        );
        break;
      default:
        console.log("fuck");
    }
  };
  const leftSlider = () => {
    if (slider >= 2) return;
    setSlider((slider += 1));
  };
  const rightSlider = () => {
    if (slider <= 0) return;
    setSlider((slider -= 1));
  };
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button onClick={leftSlider}>
            <ArrowBackIosNewIcon />
          </Button>
          {sliderImages()}
          <Button onClick={rightSlider}>
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Container>
    </>
  );
};
export default Slider;
