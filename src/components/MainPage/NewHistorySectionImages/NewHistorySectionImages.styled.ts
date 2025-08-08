import styled from '@emotion/styled';

export const LeftDecorativePicture = styled.picture`
  position: absolute;
  top: -19px;
  left: -44px;
  width: 135px;
  height: 133px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 5.3lvh;
    left: -4.5vw;
    width: 226px;
    height: 214px;
  }
`;

export const RightDecorativePicture = styled.picture`
  position: absolute;
  top: -47px;
  right: -32px;
  width: 128px;
  height: 137px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 159px;
    right: 66px;
    width: 154px;
    height: 120px;
  }
`;

export const BackgroundPicture = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 117.5lvh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 132lvh;
    opacity: 0.15;
  }

  & > img {
    width: 100%;
    height: 100%;
  }
`;
