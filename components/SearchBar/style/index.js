import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: ${({ theme }) => theme.sizes.xsmall} ${({ theme }) => theme.sizes.medium};
  background: ${({ theme }) => theme.colors.grey_v3};
  width: 75%;
  border: ${({ theme }) => theme.sizes.base} solid ${({ theme }) => theme.colors.grey_v2};
  border-radius: ${({ theme }) => theme.radius.normal};
  outline: none;
  font-size: ${({ theme }) => theme.sizes.medium};

  &:focus {
    border: ${({ theme }) => theme.sizes.xxxxsmall} solid ${({ theme }) => theme.colors.brand_color};
    padding: 0.688rem 0.937rem;
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.sizes.small};
  }

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 ${({ theme }) => theme.sizes.xxxxlarge};

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    margin-top: ${({ theme }) => theme.sizes.xxxsmall};
    padding: 0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  position: relative;
  right: ${({ theme }) => theme.sizes.xxxlarge};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    position: absolute;
    right: ${({ theme }) => theme.sizes.large};
  }
`;
