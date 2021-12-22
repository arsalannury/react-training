
import { Component } from 'react';
import {Typography} from '@mui/material';

class BadgeAall extends Component {
    render() { 
        return(
            <>
             <Typography sx={{
                 background : '#eee',
                 padding : '6px',
                 textAlign : 'center',
                 width : '100%'
             }}>
               {this.showAll()}
             </Typography>
            </>
        )
    }
    showAll = () => {
        let resultCount = 0;
        this.props.stateProduct.map(products => {
        resultCount += products.count;
        })
        return resultCount;
    }
}
 
export default BadgeAall;