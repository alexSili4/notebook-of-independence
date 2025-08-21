import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 36.7vw;
    height: 100%;
    padding-top: 10vh;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    padding-bottom: ${({ theme }) => theme.spacing(13)}px;
  }
`;

export const Title = styled.p`
  position: relative;
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    color: #9f9f9f;
    font-family: ${({ theme }) => theme.fontFamily.inter};
    font-size: 20px;
  }
`;
