import styled from '@emotion/styled';
import textBg from '@/images/chronicle/thirdStep/text-bg.png';

export const PhotoLeft = styled.img`
  position: absolute;
  top: 62px;
  left: -219px;
  width: 397px;
  height: 294px;
`;

export const PhotoRight = styled.img`
  position: absolute;
  top: -80px;
  right: -204px;
  width: 386px;
  height: 273px;
`;

export const TextWrap = styled.div`
  position: absolute;
  top: 165px;
  right: -186px;
  width: 285px;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(10)}px ${spacing(10)}px ${spacing(12)}px ${spacing(10)}px`};
  background-image: url(${textBg});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  rotate: 9.09deg;
`;

export const Text = styled.p`
  color: #404040;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.1;
  text-align: center;
`;
