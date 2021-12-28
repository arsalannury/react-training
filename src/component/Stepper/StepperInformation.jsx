import styled from 'styled-components';

function StepperInformation() {
    return (
        <>
        <Container>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
        </Container>
        </>
    )
}

export default StepperInformation

const Container = styled.div`
color : #000;
`
const Paragraph = styled.p`
font-size  : 1em;
`