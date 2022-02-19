import styled from 'styled-components';

function Home(props) {
  return (
    <Main>
        <Show style={{background : props.back}}>{props.back}</Show>
      <ColorContainer>
        <Color1 onClick={props.one}></Color1>
        <Color2 onClick={props.two}></Color2>
        <Color3 onClick={props.three}></Color3>
        <Color4 onClick={props.four}></Color4>
        <Color5 onClick={props.five}></Color5>
      </ColorContainer>
    </Main>
  );
}

export default Home;

const Color1 = styled.span`
margin: 0 10px 0 10px;
background : #fb8500;
width: 30px;
height: 30px;
border-radius: 50%;
cursor : pointer;
`
const Color2 = styled(Color1)`
background : #ffb703   ;
`
const Color3 = styled(Color1)`
background : #023047   ;
`
const Color4 = styled(Color1)`
background : #219ebc   ;
`
const Color5 = styled(Color1)`
background : #8ecae6   ;
`

const ColorContainer = styled.div`
display : flex;
align-items : center;
jsutify-content : space-evenly;
margin : 50px 0 0 0 ;
`
const Show = styled.div`
height : 150px;
width : 200px;
border-radius : 10px;
border : 1px solid #333;
display : flex;
align-items : center;
justify-content : center;
font-size : 20px;
color : #fff;
`
const Main = styled.div`
display : flex;
align-items : center;
justify-content : space-around;
flex-direction : column;
`