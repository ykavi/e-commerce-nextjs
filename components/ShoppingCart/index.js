import { useTheme } from 'styled-components';
import { Container, IconWrapper } from './style';
import { Basket } from '@Icons';

const ShoppingCart = () => {
  const theme = useTheme();

  return (
    <Container>
      <IconWrapper>
        <Basket width={30} />
      </IconWrapper>
    </Container>
  );
};

export default ShoppingCart;
