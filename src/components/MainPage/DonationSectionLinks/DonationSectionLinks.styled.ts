import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    justify-content: flex-end;
    gap: ${({ theme }) => theme.spacing(13)}px;
    width: 37.5vw;
    padding-bottom: 26.9lvh;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 34px;
  font-weight: 600;
  line-height: 1.28;
  letter-spacing: -2px;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 60px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.93px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(2)}px;
  }
`;

export const ListItem = styled.li``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  border-radius: 100px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 56px;
  }
`;

export const MonoLink = styled(Link)`
  background-color: #6983d0;
`;

export const CryptoLink = styled(Link)`
  background-color: #deb04b;
`;

export const GoBackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  padding: 0;
  border: none;
  border-radius: 100px;
  background-color: #6983d0;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 56px;
  }
`;
