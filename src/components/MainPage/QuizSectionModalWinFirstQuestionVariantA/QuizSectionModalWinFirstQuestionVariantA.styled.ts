import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  bottom: 28px;
  left: 6px;
  rotate: 2.2deg;
  transition: translate ${({ theme }) => theme.transitionDurationAndFunc.all};

  &:has(input:is(:hover, :focus)) {
    translate: 0 -30px;
  }
`;
