import styled from '@emotion/styled';

export const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  position: relative;
  height: 100%;
  background-color: #404040;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BackgroundTexture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing(20)}px;
  padding-right: ${({ theme }) => theme.spacing(20)}px;
`;
