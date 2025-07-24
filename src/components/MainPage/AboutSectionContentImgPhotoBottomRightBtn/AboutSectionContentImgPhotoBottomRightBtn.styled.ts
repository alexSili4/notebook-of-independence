import styled from '@emotion/styled';

export const Container = styled.div``;

export const PhotoBottomRight = styled.img`
  width: 111px;
  height: 164px;
  transition: rotate ${({ theme }) => theme.transitionDurationAndFunc.all};

  button:is(:hover, :focus) > & {
    rotate: 10.01deg;
  }
`;

export const PhotoBottomRightMarker = styled.div`
  position: absolute;
  bottom: 44px;
  right: 2px;
`;
