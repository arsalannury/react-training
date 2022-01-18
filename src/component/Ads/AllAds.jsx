import { Component } from 'react'
import styled from 'styled-components';
import {useAdsContext} from '../../Context/AdsContext'
import Ads from './Ads';

class AllAds extends Component {
    static contextType = useAdsContext;
    state = {  } 
    
    render() { 
        return (
            <>
            <Container>
                {this.context.electronics.map((item,index) => (
                    <Ads 
                    key={index}
                    id={item.id}
                    image={item.image}
                    des={item.description}
                    title={item.title}
                    price={item.price}
                    />
                ))}
            </Container>
            </>
        );
    }
}
 
export default AllAds;

const Container = styled.div`

`