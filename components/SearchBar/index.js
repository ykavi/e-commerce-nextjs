import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { StyledInput, Container, IconWrapper } from './style';
import { Search } from '@Icons';

const SearchBar = () => (
  <Container>
    <StyledInput type="text" />
    <IconWrapper>
      <Search width={30} />
    </IconWrapper>
  </Container>
);

export default SearchBar;
