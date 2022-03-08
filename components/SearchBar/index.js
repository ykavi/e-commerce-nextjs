import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { StyledInput, Container } from './style';
import { Search } from '@Icons';

const SearchBar = () => (
  <Container>
    <StyledInput type="text" />
    <Search />
  </Container>
);

export default SearchBar;
