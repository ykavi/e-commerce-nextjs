import { Col, Row } from 'react-styled-flexboxgrid';
import { StyledHeader } from './style';

const Header = () => (
  <StyledHeader>
    <Row>
      <Col lg={6}>
        <p>Header</p>
      </Col>
    </Row>
  </StyledHeader>
);

export default Header;
