import styled from '@emotion/styled';

export const GreyBg = styled.div`
  position: absolute;
  top: 0;
  left: -125px;
  width: 52.4vw;
  height: 101.4lvh;
  background-color: #555555;
  rotate: -2.71deg;
`;

export const WhiteBg = styled.div`
  position: absolute;
  top: 42px;
  left: -107px;
  width: 52.4vw;
  height: 96lvh;
  background-color: ${({ theme }) => theme.colors.white};
  rotate: 1.48deg;
`;
