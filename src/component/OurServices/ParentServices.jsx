import { Component } from "react";
import OurServices from "./OurServies";
import styled from "styled-components";
import ServicesContext from '../../Context/ServicesContext';

class ParentServices extends Component {
 static contextType = ServicesContext;
  render() {
    return (
      <>
      <Title>Our Services</Title>
      <Box>
        {this.context.serviceState.map((item, index) => (
          <OurServices
            key={index}
            id={item.id}
            text={item.text}
            footer={item.footer}
            icon={item.icon}
          />
        ))}
        </Box>
      </>
    );
  }
}

export default ParentServices;

const Box = styled.div`
display : grid;
height : 600px;
grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
grid-template-rows: repeat(6,270px);
grid-auto-rows : 270px;
gap : 60px;
`
const Title = styled.p`
 text-align : center;
 font-size : 22px;
 color : #888;
`