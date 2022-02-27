import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { StyledHeader } from './style';

const Header = () => (
  <StyledHeader>
    <Grid>
      <Row>
        <Col lg={12}>LOGO</Col>
        <Col lg={10}>SEARCH_BAR</Col>
        <Col lg={2}>BASKED_CART</Col>
      </Row>
    </Grid>
  </StyledHeader>
);

export default Header;
