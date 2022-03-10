import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { StyledHeader, StyledImage, LogoWrapper } from './style';
import { SearchBar, ShoppingCart } from '@components';

const Header = () => (
  <StyledHeader>
    <Grid>
      <Row>
        <Col lg={3}>
          <LogoWrapper>
            <StyledImage src="http://cdn.shopify.com/s/files/1/0596/1452/7675/files/example-logo_1200x1200.png?v=1634306608" />
          </LogoWrapper>
        </Col>

        <Col lg={14}>
          <SearchBar />
        </Col>

        <Col lg={7}>
          <ShoppingCart />
        </Col>
      </Row>
    </Grid>
  </StyledHeader>
);

export default Header;
