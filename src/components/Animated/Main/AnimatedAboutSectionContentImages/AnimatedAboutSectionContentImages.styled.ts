import styled from '@emotion/styled';

export const Text = styled.p`
  position: absolute;
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 30px;
  font-weight: 400;
  line-height: 1.08;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};

  div:has(button:is(:hover, :focus)) > div > div > & {
    opacity: 1;
  }
`;

export const Images = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;

export const PhotoWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const PhotoTopLeftText = styled(Text)`
  left: 54.7vw;
  bottom: 25.6vh;
  width: 501px;
`;

export const PhotoBottomLeftText = styled(Text)`
  left: 53.5vw;
  bottom: 16.4vh;
  width: 506px;
`;

export const PhotoTopRightText = styled(Text)`
  left: 54.7vw;
  bottom: 21.6vh;
  width: 506px;
`;

export const PhotoBottomCenterText = styled(Text)`
  left: 55.8vw;
  bottom: 21.6vh;
  width: 501px;
`;

export const PhotoBottomRightText = styled(Text)`
  left: 54.7vw;
  bottom: 41.5vh;
  width: 506px;
`;
