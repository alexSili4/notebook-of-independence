import styled from '@emotion/styled';

export const Container = styled.div``;

export const PhotoBottomLeft = styled.img`
  width: 363px;
  height: 341px;
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
