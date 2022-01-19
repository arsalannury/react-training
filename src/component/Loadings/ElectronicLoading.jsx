import { Component } from 'react';
import Skeleton from 'react-loading-skeleton';

class ElectronicLoading extends Component {

    render() { 
        return (
            <>
            <Skeleton width={1300} height={250} />
            </>
        );
    }
}
 
export default ElectronicLoading;