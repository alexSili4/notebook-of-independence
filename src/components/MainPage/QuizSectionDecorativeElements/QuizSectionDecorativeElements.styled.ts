import styled from '@emotion/styled';

export const LineLeft = styled.picture`
  position: absolute;
  top: -79px;
  left: 16px;
  width: 153px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 54px;
    left: -22px;
    width: 177px;
  }
`;

export const LineRight = styled.img`
  position: absolute;
  bottom: 9px;
  right: 43px;
  width: 296px;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;
