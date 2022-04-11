import { ItemInfo } from './style';
import { Text, NImage } from '../';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

const CartProduct = () => {
  return (
    <Row>
      <Col lg={7}>
        <NImage src="https://cdn.dsmcdn.com/ty119/product/media/images/20210524/14/91056373/57025599/1/1_org_zoom.jpg" alt="alt" />
      </Col>
      <Col lg={17}>
        <ItemInfo>
          <Text>Spiderman Yeni Örümcek Adam 2 Maskeli Kostüm v733v</Text>
          <Text>Spiderman Yeni Örümcek Adam 2 Maskeli Kostüm v733v</Text>
        </ItemInfo>
      </Col>
    </Row>
  );
};

export default CartProduct;
