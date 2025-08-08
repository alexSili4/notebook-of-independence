import styled from '@emotion/styled';
import { IStyledPhotoBottomLeftProps } from './AboutSectionContentImgPhotoBottomLeftBtn.types';

export const Container = styled.div``;

export const PhotoBottomLeft = styled.img<IStyledPhotoBottomLeftProps>`
  width: 363px;
  height: 341px;
  rotate: ${({ inFocus }) => (inFocus ? -12.71 : 0)}deg;
  transition: rotate ${({ theme }) => theme.transitionDurationAndFunc.all};

  button:is(:hover, :focus) > & {
    rotate: -12.71deg;
  }
`;

export const PhotoBottomLeftMarker = styled.div`
  position: absolute;
  top: 46px;
  left: 40px;
`;
