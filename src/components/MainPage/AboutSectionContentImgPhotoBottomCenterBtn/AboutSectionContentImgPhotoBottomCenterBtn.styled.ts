import styled from '@emotion/styled';

export const Container = styled.div``;

export const PhotoBottomCenter = styled.img`
  width: 270px;
  height: 270px;
  transition: rotate ${({ theme }) => theme.transitionDurationAndFunc.all};

  button:is(:hover, :focus) > & {
    rotate: -6.15deg;
  }
`;

export const PhotoBottomCenterMarker = styled.div`
  position: absolute;
  top: 40px;
  right: 32px;
`;
