import styled from 'styled-components';
import Typist from 'react-typist';

function AnimationType() {
    return (
        <>
        <Container>
        <Type avgTypingDelay={200} cursor={{hideWhenDone: true ,hideWhenDoneDelay: 100}}>
        <Typist.Delay ms={3000} />
            <Title>Tech Phone Online Shop</Title>
            <Paragraph>Touch Tomorrow with Technology</Paragraph>
            <Paragraph>Save Time with Us</Paragraph>
        </Type>
        <ImgAnime src="anime.png" />
        <Blob src="blob2.svg" />
        </Container>
        </>
    )
}

export default AnimationType

const Title = styled.h3`
 color : #0077b6;
`
const Paragraph = styled.p`

`
const ImgAnime = styled.img`
 width : 50%;
 height : 350px;
`
const Container = styled.div`
display: flex;
align-items: flex-start;
margin: 60px 20px 20px 20px;
position : relative;
`
const Type = styled(Typist)`
width : 50%;
padding-left : 50px;
`
const Blob = styled.img`
position : absolute;
width : 30%;
opacity : .2;
`