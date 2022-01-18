import { Component } from 'react'
import styled from 'styled-components';
import {useAdsContext} from '../../Context/AdsContext'



class Ads extends Component {
    static contextType = useAdsContext;
    state = {  } 
    render() { 
        const {id,price,title,des,image} = this.props
        return (
            <>
            <Container>
                <Image src={image} alt='' />
                <Box>
                    <Title>{title}</Title>
                    <Price>{price}</Price>
                </Box>
                <Description>{des}</Description>
            </Container>
            </>
        );
    }
}
 
export default Ads;

const Container = styled.div`

`
const Image = styled.img`

`
const Title = styled.p`

`
const Price = styled.p`

`
const Box = styled.div`

`
const Description = styled.p`

`