import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  rotate: 1.5deg;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    bottom: 8px;
    right: 4px;
    rotate: -0.24deg;
    transition: translate ${({ theme }) => theme.transitionDurationAndFunc.all};

    &:has(input:is(:hover, :focus)) {
      translate: 0 -30px;
    }
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    bottom: 0;
    left: 0;
    width: 50%;
    height: 50%;
  }
`;
