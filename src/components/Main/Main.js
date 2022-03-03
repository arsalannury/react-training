import {connect} from 'react-redux';
import styled from 'styled-components';

const Main = () => {
  return ( 
    <>
    <Contaienr>
        <Content>

        </Content>
    </Contaienr>
    </>
   );
}
 
export default Main;

const Contaienr = styled.div`
background-color : #212529;
height: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
`

const Content = styled.div`
margin-top : 30px;
width: 400px;
height: 300px;
backdrop-filter: blur(25px) saturate(158%);
    -webkit-backdrop-filter: blur(25px) saturate(158%);
    background-color: rgba(255, 255, 255, 0.63);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
`