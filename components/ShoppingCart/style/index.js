import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: row-reverse;
  cursor: pointer;
  position: relative;

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    position: absolute;
    height: auto;
    right: 9px;
    top: 10px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
`;

export const CartContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey_v2};
  position: absolute;
  width: 20rem;
  top: 45px;
  border-radius: ${({ theme }) => theme.radius.normal};
  padding: ${({ theme }) => theme.sizes.medium};
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.sizes.medium} 0;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
