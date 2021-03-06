import { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Box} from '@mui/material';
import Countdown from 'react-countdown';
import styled from "styled-components";


class SaleSlider extends Component {
  render() {
    return (
      <>
        <Card sx={{ maxWidth: 300 , margin : '0 auto', padding : '10px 0'}}>
          <CardMedia
            component="img"
            height="140"
            image={this.props.image}
            alt="addidas model shirt"
            sx={{width : '100%',objectFit : 'fill'}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {this.props.text}
            </Typography>
          </CardContent>
          <Box sx={{
              display : 'flex',
              alignItems : 'center',
              justifyContent : 'space-evenly',
          }}>
              <Typography sx={{color : '#54E346'}}>{this.props.price}</Typography>
              <Typography><Countdown date={Date.now() + this.props.timer} /></Typography>
              <Del>{this.props.salePrice}</Del>
          </Box>
        </Card>
      </>
    );
  }
}

export default SaleSlider;

const Del = styled.del`
color : #FA1E0E;
`