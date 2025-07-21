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

  div:has(button:is(:hover, :focus)) > & {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const PhotoWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;
  pointer-events: all;
`;

export const PhotoTopLeftBtnWrap = styled.div`
  position: absolute;
  top: 9.5vh;
  left: 16.7vw;
`;

export const PhotoTopLeft = styled.img`
  width: 407px;
  height: 293px;
`;

export const PhotoTopLeftText = styled(Text)`
  left: 54.7vw;
  bottom: 25.6vh;
  width: 501px;
`;

export const PhotoTopLeftMarker = styled.div`
  position: absolute;
  top: 121px;
  left: 11px;
`;

export const PhotoBottomLeftBtnWrap = styled.div`
  position: absolute;
  bottom: -6.3vh;
  left: 2.7vw;
`;

export const PhotoBottomLeft = styled.img`
  width: 363px;
  height: 341px;
`;

export const PhotoBottomLeftText = styled(Text)`
  left: 53.5vw;
  bottom: 16.4vh;
  width: 506px;
`;

export const PhotoBottomLeftMarker = styled.div`
  position: absolute;
  top: 46px;
  left: 40px;
`;

export const PhotoTopRightBtnWrap = styled.div`
  position: absolute;
  top: 5.5vh;
  left: 76.6vw;
`;

export const PhotoTopRight = styled.img`
  width: 183px;
  height: 183px;
`;

export const PhotoTopRightText = styled(Text)`
  left: 54.7vw;
  bottom: 21.6vh;
  width: 506px;
`;

export const PhotoTopRightMarker = styled.div`
  position: absolute;
  right: 66px;
  bottom: -3px;
`;

export const PhotoBottomCenterBtnWrap = styled.div`
  position: absolute;
  bottom: 2.9vh;
  left: 16.8vw;
`;

export const PhotoBottomCenter = styled.img`
  width: 270px;
  height: 270px;
`;

export const PhotoBottomCenterText = styled(Text)`
  left: 55.8vw;
  bottom: 21.6vh;
  width: 501px;
`;

export const PhotoBottomCenterMarker = styled.div`
  position: absolute;
  top: 40px;
  right: 32px;
`;

export const PhotoBottomRightBtnWrap = styled.div`
  position: absolute;
  bottom: 25.1vh;
  left: 34.9vw;
`;

export const PhotoBottomRight = styled.img`
  width: 111px;
  height: 164px;
`;

export const PhotoBottomRightText = styled(Text)`
  left: 54.7vw;
  bottom: 41.5vh;
  width: 506px;
`;

export const PhotoBottomRightMarker = styled.div`
  position: absolute;
  bottom: 44px;
  right: 2px;
`;

export const DecorativeLines = styled.img`
  position: absolute;
  top: 6.9vh;
  left: -22px;
  width: 206px;
  height: 250px;
`;

export const DecorativeBackground = styled.img`
  position: absolute;
  top: -2px;
  left: 7.6vw;
  width: 454px;
  height: 297px;
`;

export const DecorativeStar = styled.img`
  position: absolute;
  top: 3vh;
  left: 10.1vw;
  width: 126px;
  height: 126px;
`;

export const DecorativePhoto = styled.img`
  position: absolute;
  top: -136px;
  left: 77.6vw;
  width: 383px;
  height: 424px;
`;
