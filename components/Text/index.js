import { useTheme } from 'styled-components';
import { Container, StyledText } from './style';

const Text = ({ children, center, margin }) => {
  const theme = useTheme();

  return (
    <Container center={center} margin={margin}>
      <StyledText>{children}</StyledText>
    </Container>
  );
};

export default Text;
