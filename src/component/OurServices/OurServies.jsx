import { Component } from 'react'
import styled from 'styled-components';
import Typist from 'react-typist';

class OurServices extends Component {
    render() { 
        const {id} = this.props;
        return(
            <>
            <Container>
                <Icon src={this.props.icon} />
                <Description>{this.props.text}</Description>
                <Typist cursor={{hideWhenDone: true ,hideWhenDoneDelay: 100}}>
                <Footer>{this.props.footer}</Footer>
                </Typist>
            </Container>
            </>
        )
    }
}
 
export default OurServices;

const Container = styled.div`
 width : 250px;
 height : 260px;
 display : flex;
 align-items : center;
 justify-content : space-evenly;
 flex-direction : column;
 margin : auto;
 transition : all .5s ease;
 &:hover {
     transform : translateY(-30px);
 }
`
const Icon = styled.img`
 width : 80px;
`
const Description = styled.p`
 text-align : center;
 color : #888;
`
const Footer = styled.p`
 font-wight : bold;
`