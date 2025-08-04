import styled from '@emotion/styled';

export const Container = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 40vw;
  height: 85vh;
`;

export const NotebookWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
