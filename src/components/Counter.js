import { Component } from 'react'
import {Grid,Box,Button} from '@mui/material'

class Slider extends Component {
    render() {
        const {image,increment,decrement,secrement,previous,next} = this.props;
        return (
            <>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <Box>
                    <img src={image} />
                    <Button onClick={increment} variant='outlined'>One</Button>
                    <Button onClick={decrement} variant='outlined'>Two</Button>
                    <Button onClick={secrement} variant='outlined'>Three</Button>
                    <Button onClick={next} variant='outlined'>next</Button>
                    <Button onClick={previous} variant='outlined'>previous</Button>
                </Box>
            </Grid>
            </>
        );
    }
}
 
export default Slider;