import { Component } from "react";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <>
        <Container>
          <ColumnThree>
            <Menu>
              <MenuItem>دسته بندی</MenuItem>
              <MenuItem>نمایندگی ها</MenuItem>
              <MenuItem>ساخت محصول</MenuItem>
            </Menu>
          </ColumnThree>
          <ColumnOne>
            <Image src="Sun.png" />
          </ColumnOne>
        </Container>
      </>
    );
  }
}

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height : 100px;
  padding : 10px;
`;
const Image = styled.img`
  width: 190px;
`;
const Search = styled.img`
  width: 30px;
`;
const ColumnOne = styled.div`
 padding-top : 35px;
`;

const ColumnTwo = styled.div``;
const ColumnThree = styled.div`
display : flex;
align-items : center;
justify-content : center;
`;

const Menu = styled.ul`
display : flex;
align-items : center;
justify-content : space-around;
width : 300px;
`;
const MenuItem = styled.li`
list-style-type : none;
cursor : pointer;
font-size : .9em;
padding : 9px;
transition : all .5s ease ;
&:hover{
  color : #003566;
}
`;


// <ColumnTwo>
//             <Search src="search.svg" />
//           </ColumnTwo>