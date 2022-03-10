import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: ${({ theme }) => theme.sizes.xsmall} ${({ theme }) => theme.sizes.medium};
  background: ${({ theme }) => theme.colors.grey_v3};
  width: 100%;
  border: ${({ theme }) => theme.sizes.base} solid ${({ theme }) => theme.colors.grey_v2};
  border-radius: ${({ theme }) => theme.radius.normal};
  outline: none;
  font-size: ${({ theme }) => theme.sizes.medium};

  &:focus {
    border: ${({ theme }) => theme.sizes.xxxxsmall} solid ${({ theme }) => theme.colors.brand_color};
    padding: ${({ theme }) => theme.sizes.xsmall} 0.937rem;
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 ${({ theme }) => theme.sizes.xxxxlarge};
`;

export const IconWrapper = styled.div`
  display: flex;
  position: relative;
  right: ${({ theme }) => theme.sizes.xxxlarge};
  cursor: pointer;
`;
