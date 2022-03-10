import { useTheme } from 'styled-components';
import { StyledInput, Container, IconWrapper } from './style';
import { Search } from '@Icons';

const SearchBar = () => {
  const theme = useTheme();

  return (
    <Container>
      <StyledInput type="text" placeholder="ürün arama..." />
      <IconWrapper>
        <Search width={25} color={theme.colors.brand_color} />
      </IconWrapper>
    </Container>
  );
};

export default SearchBar;
