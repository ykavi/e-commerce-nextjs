import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.sizes.xxxxlarge};
  padding: ${({ theme }) => theme.sizes.small} 0;
  border-bottom: ${({ theme }) => theme.sizes.base} solid ${({ theme }) => theme.colors.grey_v2};
`;

export const StyledImage = styled.img`
  width: 100%;
`;
