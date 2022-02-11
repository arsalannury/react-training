import { Grid } from "@mui/material";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6} sm={6} md={6} ld={6}>
          <SearchBar>
            <Icon />
            <Input type="text" placeholder="دنبال چه محصولی هستید ؟" />
          </SearchBar>
        </Grid>
        <GridImages item xs={6} sm={6} md={6} ld={6}>
          <Div>
            <Image src="globe.png" />
            <Image src="carr.png" />
            <Image src="paypal.svg" />
          </Div>
        </GridImages>
      </Grid>
    </>
  );
};

export default Search;

const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const GridImages = styled(Grid)`
  background: #cd1c1c;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 30px;
  background: #cd1c1c;
`;

const Input = styled.input`
  padding: 12px 30px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background: #eee;
  font-family: inherit;
  font-size: 0.8em;
  transition: all 0.5s ease;
  width: 200px;
  &::placeholder {
    color: #444;
    font-family: inherit;
    font-size: 0.8em;
  }
  &:focus {
    border: 1px solid #bbb;
    outline: none;
    width: 300px;
  }
`;

const Icon = styled(SearchIcon)`
  position: absolute;
  margin: 5px;
  color: #777;
  cursor: pointer;
`;

const Image = styled.img``;
