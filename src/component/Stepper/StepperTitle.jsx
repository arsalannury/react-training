import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import TypeAnimation from "react-type-animation";

function StepperTitle() {
  const typing = () => {
    return (
      <TypeAnimation
        sequence={["Every Day Every Time With Addidas", 5000, ""]}
        wrapper={ParagraphAnimation}
        repeat={Infinity}
      />
    );
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          margin: "60px 0 10px 0",
          minHeight : '177px'
        }}
      >
       
        <Paragraph>
          We Have Good Offer To You{" "}
          <CheckOutlinedIcon sx={{ color: "#38b000" }} />
        </Paragraph>
        <Paragraph>
          Big Addidas Sale <CheckOutlinedIcon sx={{ color: "#38b000" }} />
        </Paragraph>
        <Paragraph>
          Fallow Stepper If You Want Know About Our Processes{" "}
          <CheckOutlinedIcon sx={{ color: "#38b000" }} />
        </Paragraph>
        {typing()}
      </Box>
    </>
  );
}

export default StepperTitle;

const Paragraph = styled.p`
  text-align: center;
`;
const ParagraphAnimation = styled.p`
color : #999;
`
