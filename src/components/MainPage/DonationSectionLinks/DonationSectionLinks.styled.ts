import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(13)}px;
  width: 37.5vw;
  padding-bottom: 26.9vh;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.93px;
  text-align: center;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const ListItem = styled.li``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  border-radius: 100px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const MonoLink = styled(Link)`
  background-color: #6983d0;
`;

export const CryptoLink = styled(Link)`
  background-color: #deb04b;
`;
