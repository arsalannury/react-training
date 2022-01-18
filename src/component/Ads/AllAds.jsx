import { Component } from 'react'
import styled from 'styled-components';
import {useAdsContext} from '../../Context/AdsContext'

class AllAds extends Component {
    static contextType = useAdsContext;
    state = {  } 
    
    render() { 
        return (
            <>
            <Container>
                
            </Container>
            </>
        );
    }
}
 
export default AllAds;

const Container = styled.div`

`