import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 14px;
  right: 292px;
  rotate: 9.5deg;
  transition: translate ${({ theme }) => theme.transitionDurationAndFunc.all};

  &:has(input:is(:hover, :focus)) {
    translate: 0 -30px;
  }
`;
