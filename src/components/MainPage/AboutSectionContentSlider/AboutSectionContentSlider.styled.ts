import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }
`;

export const DecorativeLines = styled.img`
  position: absolute;
  top: -32px;
  left: -38px;
  width: 138px;
  height: 144px;
`;
