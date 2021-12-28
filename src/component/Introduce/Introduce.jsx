import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import {useContext} from 'react';
import ShoesContext from "../../context/ContextShoes";

const Introduce = ({ id, count, name, text, image, price, priceSell }) => {
    const shoesContext = useContext(ShoesContext);
    const handleIncrement = () => {
        shoesContext.increment(id)
    }
    const handleDecrement = () => {
        shoesContext.decrement(id)
    }
    const handleDelete = (event) => {
        shoesContext.deleted(id)
        event.target.parentElement.style.display = 'none';
    }
  return (
    <>
      <Card sx={{ maxWidth: 300, minWidth: 300, margin: "60px 30px 30px 30px" }}>
        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          alt="new collection shoes"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <del variant="del">{price}</del>
            <Typography variant="body2">{priceSell}</Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={handleIncrement} size="small">+</Button>
          <Button size="small">{count}</Button>
          <Button onClick={handleDecrement} size="small">-</Button>
          <Button onClick={handleDelete} size="small">Remove</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Introduce;
