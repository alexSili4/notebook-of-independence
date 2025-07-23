import styled from '@emotion/styled';

export const Container = styled.div``;

export const PhotoTopRight = styled.img`
  width: 183px;
  height: 183px;
  transition: rotate ${({ theme }) => theme.transitionDurationAndFunc};

  button:is(:hover, :focus) > & {
    rotate: -12.69deg;
  }
`;

export const PhotoTopRightMarker = styled.div`
  position: absolute;
  right: 66px;
  bottom: -3px;
`;
