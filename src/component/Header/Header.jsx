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
          <ColumnTwo>
            <Search src="search.svg" />
          </ColumnTwo>
          <ColumnOne>
            <Image src="Sun.png" />
          </ColumnOne>
        </Container>
      </>
    );
  }
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 190px;
`;
const Search = styled.img`
  width: 30px;
`;
const ColumnOne = styled.div``;

const ColumnTwo = styled.div``;
const ColumnThree = styled.div``;

const Menu = styled.ul``;
const MenuItem = styled.li``;
