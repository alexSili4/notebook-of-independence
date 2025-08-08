import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  rotate: -3.37deg;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    bottom: 28px;
    left: 6px;
    rotate: 2.2deg;
    transition: translate ${({ theme }) => theme.transitionDurationAndFunc.all};

    &:has(input:is(:hover, :focus)) {
      translate: 0 -30px;
    }
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    width: 50%;
    height: 50%;
  }
`;
