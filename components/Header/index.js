import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { StyledHeader, StyledImage, LogoWrapper } from './style';
import { SearchBar, ShoppingCart } from '@components';

const Header = () => (
  <StyledHeader>
    <Grid>
      <Row>
        <Col lg={4} md={4} sm={4} xs={8}>
          <LogoWrapper href="/">
            <StyledImage src="https://cdn.dsmcdn.com/mweb/production/trendyol-logov2.svg" />
          </LogoWrapper>
        </Col>

        <Col lg={17} md={17} sm={17} xs={24}>
          <SearchBar />
        </Col>

        <Col lg={3} md={3} sm={3} xs={12}>
          <ShoppingCart />
        </Col>
      </Row>
    </Grid>
  </StyledHeader>
);

export default Header;
