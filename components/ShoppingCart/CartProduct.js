import { CartContainer } from './style';
import { Text, NImage } from '../';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

const CartProduct = () => {
  return (
    <>
      <Col lg={7}>
        <NImage src="https://cdn.dsmcdn.com/ty119/product/media/images/20210524/14/91056373/57025599/1/1_org_zoom.jpg" alt="alt" />
      </Col>
    </>
  );
};

export default CartProduct;
