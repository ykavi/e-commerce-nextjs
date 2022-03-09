import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { StyledHeader, StyledImage } from './style';
import { SearchBar } from '@components';

const Header = () => (
  <StyledHeader>
    <Grid>
      <Row>
        <Col lg={3}>
          <StyledImage src="http://cdn.shopify.com/s/files/1/0596/1452/7675/files/example-logo_1200x1200.png?v=1634306608" />
        </Col>

        <Col lg={14}>
          <SearchBar />
        </Col>

        <Col lg={7}>BASKED_CART</Col>
      </Row>
    </Grid>
  </StyledHeader>
);

export default Header;
