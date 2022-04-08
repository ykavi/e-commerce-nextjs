import { useTheme } from 'styled-components';
import { Container, IconWrapper } from './style';
import Cart from './Cart';
import { Basket } from '@Icons';
import { Text } from '@components';

const ShoppingCart = () => {
  const theme = useTheme();

  return (
    <Container>
      <Text margin="0 0 0 0.25rem" center>
        Sepetim
      </Text>

      <IconWrapper>
        <Basket width={30} />
      </IconWrapper>
      <Cart />
    </Container>
  );
};

export default ShoppingCart;
