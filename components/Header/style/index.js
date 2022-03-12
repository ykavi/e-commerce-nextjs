import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.small} 0;
  border-bottom: ${({ theme }) => theme.sizes.base} solid ${({ theme }) => theme.colors.grey_v2};

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    display: block;
  }
`;

export const StyledImage = styled.img``;

export const LogoWrapper = styled.a`
  display: flex;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    height: 30px;
  }
`;
