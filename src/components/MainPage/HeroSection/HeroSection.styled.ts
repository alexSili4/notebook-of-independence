import styled from '@emotion/styled';

export const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  height: 100%;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-top: 21.6lvh;
  padding-bottom: 21.7lvh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: 14.6lvh;
    padding-bottom: 16.9lvh;
  }
`;

export const TextWrap = styled.div`
  position: relative;
  width: 340px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 545px;
  }
`;
