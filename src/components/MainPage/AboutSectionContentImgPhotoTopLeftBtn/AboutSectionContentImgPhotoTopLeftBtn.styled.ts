import styled from '@emotion/styled';

export const PhotoTopLeftBtnWrap = styled.div``;

export const PhotoTopLeft = styled.img`
  width: 407px;
  height: 293px;
  transition: rotate ${({ theme }) => theme.transitionDurationAndFunc};

  button:is(:hover, :focus) > & {
    rotate: -5.91deg;
  }
`;

export const PhotoTopLeftMarker = styled.div`
  position: absolute;
  top: 121px;
  left: 11px;
`;
