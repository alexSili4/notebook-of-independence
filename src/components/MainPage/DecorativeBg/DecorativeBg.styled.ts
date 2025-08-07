import styled from '@emotion/styled';

export const GreyBg = styled.div`
  position: absolute;
  top: -50px;
  left: -3px;
  width: 121.7vw;
  height: 73.5lvh;
  background-color: #555555;
  rotate: -2.71deg;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 0;
    left: -125px;
    width: 52.4vw;
    height: 101.4lvh;
  }
`;

export const WhiteBg = styled.div`
  position: absolute;
  top: -30px;
  left: -16px;
  width: 121.7vw;
  height: 69.6lvh;
  background-color: ${({ theme }) => theme.colors.white};
  rotate: 1.48deg;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    left: -107px;
    top: 42px;
    width: 52.4vw;
    height: 96lvh;
  }
`;
