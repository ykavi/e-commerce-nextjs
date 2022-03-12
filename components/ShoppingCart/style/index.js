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
    right: 9px;
    top: 1px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
`;
