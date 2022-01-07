import styled from 'styled-components';

function Footer() {
    return (
        <>
        <FooterMain>
        <FooterBody>
            <Adrress>
              <Paragraph>
              New York 1959 Wayback Lane <br />
              1959 Wayback Lane <br />
              NY
              </Paragraph>
            </Adrress>
            <Social>
                  <Logo src="icons8-google.svg"/>
                  <Logo src="icons8-instagram.svg"/>
                  <Logo src="icons8-linkedin.svg"/>
            </Social>
        </FooterBody>
        <CopyRight>2010-2022</CopyRight>
        </FooterMain>
        </>
    )
}

export default Footer

const FooterMain = styled.div`
 display : flex;
 flex-direction : column;
 align-items : center;
 justify-content : space-evenly;
 margin-top : 50px;
 padding : 20px 20px 0 20px;
 box-shadow : 0 0 25px #eee;
`
const CopyRight = styled.p`
 font-size : 14px;
 color : #aaa;
`
const FooterBody = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
const Social = styled.div`
 display : flex;
 align-items : center;
 justify-content : space-around;
 width : 150px;
`
const Adrress = styled.div`

`
const Logo = styled.img`
 cursor : pointer;
`
const Paragraph = styled.p`
 font-size : .9em;
`