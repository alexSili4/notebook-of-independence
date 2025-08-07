import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: ${({ theme }) => theme.spacing(8)}px;
    padding-bottom: ${({ theme }) => theme.spacing(8)}px;
  }
`;

export const Copyright = styled.p`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    color: #2f2f2f;
    font-family: ${({ theme }) => theme.fontFamily.inter};
    font-size: 14px;
  }
`;

export const SunLink = styled.a`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 14px;
  }
`;
