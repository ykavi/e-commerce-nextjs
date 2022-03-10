import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: row-reverse;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    position: absolute;
    height: auto;
    right: 8px;
    top: 0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
`;
