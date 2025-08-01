import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  bottom: 25px;
  left: 274px;
  rotate: -11.11deg;
  transition: translate ${({ theme }) => theme.transitionDurationAndFunc.all};

  &:has(input:is(:hover, :focus)) {
    translate: 0 -30px;
  }
`;
