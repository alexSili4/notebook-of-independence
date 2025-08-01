import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  bottom: 8px;
  right: 4px;
  rotate: -0.24deg;
  transition: translate ${({ theme }) => theme.transitionDurationAndFunc.all};

  &:has(input:is(:hover, :focus)) {
    translate: 0 -30px;
  }
`;
